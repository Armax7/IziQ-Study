import * as Components from "../../components";
import { useEffect, useState } from "react";
import * as SupaHelpers from "../api/supabase_helpers";
import * as Chakra from "@chakra-ui/react";

function Home() {
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);

  useEffect(async () => {
    const userID = await SupaHelpers.get.userId();
    setUserId(userID);

    const userDecks = await SupaHelpers.get.userDecksByCreateDate();
    setDecks(userDecks);
  }, [userID]);

  const slicedDeck = decks.slice(0, 6);

  return (
    <div>
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