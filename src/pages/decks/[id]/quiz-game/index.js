import Quiz from "../../../../components/MultipleChoise/Quitz";
import { useRouter } from "next/router";
import * as Chakra from "@chakra-ui/react";
import * as React from "react";
import * as ReactQuery from "@tanstack/react-query";
import * as CardsControllers from "../../../api/cards/controllers";
import Link from "next/link";
import axios from "axios";

const HOST = process.env.NEXT_PUBLIC_HOST;

export default function QuizPage() {
  const queryClient = ReactQuery.useQueryClient();
  const router = useRouter();
  const { id: deck_id } = router.query;

  React.useEffect(() => {
    const prefetchCards = async () => {
      await queryClient.prefetchQuery(["cardsByDeckId", deck_id], async () => {
        const response = await axios
          .get(`http://${HOST}/api/cards/deck-id/${deck_id}`)
          .then((res) => res.data);
        return response;
      });
    };
    prefetchCards();
  }, [deck_id, queryClient]);

  const {
    isLoading,
    isError,
    data: cards,
    error,
  } = ReactQuery.useQuery(
    ["cardsByDeckId", deck_id],
    async () => await CardsControllers.getCardByDeckId(deck_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
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
    >
      <Link href={`/decks/${deck_id}`} passHref>
        <Chakra.Button as="a">Back to Deck</Chakra.Button>
      </Link>
      <Quiz cards={cards} />
    </Chakra.Container>
  );
}

export async function getServerSideProps(context) {
  const { id: deck_id } = context.query;
  const queryClient = new ReactQuery.QueryClient();

  await queryClient.prefetchQuery(["cardsByDeckId", deck_id], async () => {
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
