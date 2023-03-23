import * as Components from "../../components";
import { useEffect, useState } from "react";
import * as SupaHelpers from "../api/supabase_helpers";
import * as Chakra from "@chakra-ui/react";
import { useRouter } from "next/router";

function Home() {
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(async () => {
    const userID = await SupaHelpers.get.userId();
    setUserId(userID);

    setIsLoading(true);
    const userDecks = await SupaHelpers.get.userDecksByCreateDate();
    setDecks(userDecks);
    setIsLoading(false);
  }, [userID]);

  const slicedDeck = decks.slice(0, 6);

  const goToDecks = () => {
    router.push("./decks", undefined, { shallow: true });
  };

  return (
    <div>
      {isLoading && (
        <Chakra.Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          textAlign="center"
          marginTop="20px"
        />
      )}
      {!isLoading && decks.length === 0 ? (
        <div>
          <br />
          <Chakra.Heading textAlign="center">
            Upps!! No tienes ningun Mazo todavia!
          </Chakra.Heading>
          <br />
          <Chakra.Image
            w="40%"
            mx="auto"
            src="https://mckdtyupusnhcabyhyja.supabase.co/storage/v1/object/public/images-client/IziQ-Study/Admin/sorpresa.jpg"
          />
          <Chakra.Box padding="5%" alignItems="center" textAlign="center">
            <Chakra.Button
              mx="auto"
              bg="rgb(51, 51, 51)"
              color="white"
              boxShadow="lg"
              onClick={goToDecks}
            >
              Crear Mazo
            </Chakra.Button>
          </Chakra.Box>
        </div>
      ) : null}

      {decks.length > 0 && (
        <Chakra.Box
          as="h1"
          textAlign="center"
          fontSize="3xl"
          fontWeight="bold"
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
          paddingTop="15px"
        >
          ✨ Lista de Mazos 📋 ✨
          <Components.DeckContainer decks={slicedDeck} />



        </Chakra.Box>
      )}
    </div>
  );
}

export default Home;


