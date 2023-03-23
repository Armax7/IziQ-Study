import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import * as Chakra from "@chakra-ui/react";
import * as ReactQuery from "@tanstack/react-query";
import Quiz from "../../../../components/MultipleChoise/Quitz";
import * as Components from "../../../../components";

const HOST = process.env.NEXT_PUBLIC_HOST;
const QK_DECK = "cards-by-deck-id";

function QuizPage() {
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
    async () => await getCardsByDeckId(deck_id)
  );

  if (isLoading) {
    return <Components.LoadingScreen />;
  }

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
    <Chakra.Container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      maxW="container.xl"
    >
      <Components.BackButton href={`/decks/${deck_id}`} />
      <Chakra.Box mt={5}>
        <Quiz cards={cards} />
      </Chakra.Box>
    </Chakra.Container>
  );
}

export async function getServerSideProps(context) {
  const { id: deck_id } = context.query;
  const queryClient = new ReactQuery.QueryClient();

  await queryClient.prefetchQuery(
    [QK_DECK],
    async () => await getCardsByDeckId(deck_id)
  );

  return {
    props: {
      dehydratedState: ReactQuery.dehydrate(queryClient),
    },
  };
}

async function getCardsByDeckId(deck_id) {
  const response = await axios
    .get(`${process.env.NEXT_PUBLIC_HOST}/api/cards/deck-id/${deck_id}`)
    .then((res) => res.data);

  return response;
}

export default QuizPage;
