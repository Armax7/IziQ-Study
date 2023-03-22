import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import * as Chakra from "@chakra-ui/react";
import * as ReactQuery from "@tanstack/react-query";
import Quiz from "../../../../components/MultipleChoise/Quitz";
import * as CardsControllers from "../../../api/cards/controllers";

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
      position="relative"
      maxW="container.xl"
    >
      <Link href={`/decks/${deck_id}`} passHref>
        <Chakra.Button
          bgColor="#313131"
          _hover={{ bgColor: "#666666" }}
          color="#FFFFFF"
          position="absolute"
          top="0"
          left="0"
          mt={4}
          _focus={{ boxShadow: "none" }}
        >
          <Chakra.Icon boxSize={5} color="#FFFFFF" viewBox="5 0 20 20">
            <path
              fill="currentColor"
              d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
            />
          </Chakra.Icon>
          Back
        </Chakra.Button>
      </Link>
      <Chakra.Box mt={5}>
        <Quiz cards={cards} />
      </Chakra.Box>
    </Chakra.Container>
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

export default QuizPage;
