import axios from "axios";
import { useRouter } from "next/router";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import * as Chakra from "@chakra-ui/react";
import * as Components from "../../../components";
import * as CardsControllers from "../../api/cards/controllers";

const HOST = process.env.NEXT_PUBLIC_HOST;
export const QUERY_KEY = "cardsByDeckId";

function Decks() {
  const router = useRouter();
  const { id } = router.query;

  const {
    isLoading,
    isError,
    data: cards,
    error,
  } = useQuery(
    [QUERY_KEY],
    async () => await CardsControllers.getCardByDeckId(id)
  );

  if (isError) {
    return (
      <Chakra.Alert status="error">
        <Chakra.AlertIcon />
        <Chakra.AlertTitle>Error: </Chakra.AlertTitle>
        <Chakra.AlertDescription>{error}</Chakra.AlertDescription>
      </Chakra.Alert>
    );
  }

  return (
    <div>
      <Chakra.VStack align={"stretch"}>
        <Components.CardContainer cards={cards} />
        <Components.CardDetailsContainer
          dbCards={cards}
          spacing={"1rem"}
          pb={"2rem"}
        />
        <Components.CardForm deckId={id} />
      </Chakra.VStack>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEY], async () => {
    const response = await axios
      .get(`http://${HOST}/api/cards/deck-id/${id}`)
      .then((res) => res.data);

    return response;
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Decks;
