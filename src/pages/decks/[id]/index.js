import axios from "axios";
import { useRouter } from "next/router";
import * as ReactQuery from "@tanstack/react-query";
import * as Chakra from "@chakra-ui/react";
import * as Components from "../../../components";
import * as CardsControllers from "../../api/cards/controllers";
import Link from "next/link";
const HOST = process.env.NEXT_PUBLIC_HOST;

export const QK_DECK = "cardsByDeckId";

function Decks() {
  const queryClient = ReactQuery.useQueryClient();
  const router = useRouter();
  const { id: deck_id } = router.query;

  const {
    isLoading,
    isError,
    data: cards,
    error,
  } = ReactQuery.useQuery(
    [QK_DECK],
    async () => await CardsControllers.getCardByDeckId(deck_id)
  );

  const mutationPost = ReactQuery.useMutation(
    (cardData) => {
      return axios.post(`http://${HOST}/api/cards`, cardData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QK_DECK);
      },
      onError: () => handleMutationError(mutationPost),
    }
  );

  const mutationEdit = ReactQuery.useMutation(
    (cardData) => {
      return axios.put(`http://${HOST}/api/cards`, cardData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QK_DECK);
      },
      onError: () => handleMutationError(mutationEdit),
    }
  );

  const mutationDelete = ReactQuery.useMutation(
    (cardData) => {
      return axios.delete(`http://${HOST}/api/cards`, { data: cardData });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QK_DECK);
      },
      onError: () => handleMutationError(mutationDelete),
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

  return (
    <div>
      <Chakra.VStack align={"stretch"}>
        <Components.CardContainer cards={cards} />
        <Chakra.Flex justifyContent="center">
            <Chakra.Text>
              Minigames para poder practicar jugando
            </Chakra.Text>
        </Chakra.Flex>
        <Chakra.Box
          display="flex"
          gap="20px"
          justifyContent="center"
          paddingBottom="20px"
        >
          <Link href={`/decks/${deck_id}/quiz-game`} passHref>
            <Chakra.Button
              boxShadow="lg"
              bgColor="#313131"
              _hover={{ bgColor: "#666666" }}
              color="#FFFFFF"
              _focus={{ boxShadow: "none" }}
              disabled={cards.length < 4}
            >
              Multiple Choice
            </Chakra.Button>
          </Link>
          <Link href={`/decks/${deck_id}/memory-card-game`} passHref>
            <Chakra.Button
              boxShadow="lg"
              bgColor="#313131"
              _hover={{ bgColor: "#666666" }}
              color="#FFFFFF"
              disabled={cards.length < 4}
            >
              Memory Game
            </Chakra.Button>
          </Link>
        </Chakra.Box>
        <Chakra.Flex justifyContent="center">
            <Chakra.Text>
              Necesitas un minimo de 4 cartas para jugar
            </Chakra.Text>
        </Chakra.Flex>
        <Components.CardDetailsContainer
          dbCards={cards}
          itemOnSubmitFn={mutationEdit.mutate}
          itemOnDeleteFn={mutationDelete.mutate}
          spacing={"1rem"}
          pb={"2rem"}
        />
        <Components.CardForm
          deckId={deck_id}
          onSubmitFn={mutationPost.mutate}
        />
      </Chakra.VStack>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id: deck_id } = context.query;
  const queryClient = new ReactQuery.QueryClient();

  await queryClient.prefetchQuery([QK_DECK], async () => {
    const response = await axios
      .get(`http://${HOST}/api/cards/deck-id/${deck_id}`)
      .then((res) => res.data);

    return response;
  });

  return {
    props: {
      dehydratedState: ReactQuery.dehydrate(queryClient),
    },
  };
}

function handleMutationError(mutation) {
  return (
    <Chakra.Alert status="error" onClick={() => mutation.reset()}>
      <Chakra.AlertIcon />
      <Chakra.AlertTitle>Error: </Chakra.AlertTitle>
      <Chakra.AlertDescription>{mutation.error}</Chakra.AlertDescription>
    </Chakra.Alert>
  );
}

export default Decks;
