import axios from "axios";
import { useRouter } from "next/router";
import * as ReactQuery from "@tanstack/react-query";
import * as Chakra from "@chakra-ui/react";
import * as Components from "../../../components";
import * as CardsControllers from "../../api/cards/controllers";
const HOST = process.env.NEXT_PUBLIC_HOST;

export const QUERY_KEY = "cardsByDeckId";

function Decks() {
  const queryClient = ReactQuery.useQueryClient();
  const router = useRouter();
  const { id } = router.query;

  const {
    isLoading,
    isError,
    data: cards,
    error,
  } = ReactQuery.useQuery(
    [QUERY_KEY],
    async () => await CardsControllers.getCardByDeckId(id)
  );

  const mutationPost = ReactQuery.useMutation(
    (cardData) => {
      return axios.post(`http://${HOST}/api/cards`, cardData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY);
      },
    }
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

  if (mutationPost.error) {
    <Chakra.Alert status="error" onClick={() => mutationPost.reset()}>
      <Chakra.AlertIcon />
      <Chakra.AlertTitle>Error: </Chakra.AlertTitle>
      <Chakra.AlertDescription>{mutationPost.error}</Chakra.AlertDescription>
    </Chakra.Alert>;
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
        <Components.CardForm deckId={id} onSubmitFn={mutationPost.mutate} />
      </Chakra.VStack>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const queryClient = new ReactQuery.QueryClient();

  await queryClient.prefetchQuery([QUERY_KEY], async () => {
    const response = await axios
      .get(`http://${HOST}/api/cards/deck-id/${id}`)
      .then((res) => res.data);

    return response;
  });

  return {
    props: {
      dehydratedState: ReactQuery.dehydrate(queryClient),
    },
  };
}

export default Decks;
