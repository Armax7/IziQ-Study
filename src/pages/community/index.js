import style from "../../styles/community.module.css";
import axios from "axios";
import * as Chakra from "@chakra-ui/react";
import * as ReactQuery from "@tanstack/react-query";
import * as Components from "../../components";
import * as Utils from "../../utils";

const HOST = process.env.NEXT_PUBLIC_HOST;
const QK_TOP_SIX_DECKS = "top-six-decks";

function Community() {
  const queryClient = ReactQuery.useQueryClient();

  const { data: topSixDecks } = ReactQuery.useQuery(
    [QK_TOP_SIX_DECKS],
    getTopSixDecks
  );

  return (
    <Chakra.Box>
      <Chakra.Box className={style.itemBox}>
        <Chakra.Box
          as="h1"
          textAlign="center"
          fontSize="3xl"
          fontWeight="bold"
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
          paddingTop="15px"
        >
          Top Rated ⭐⭐⭐⭐⭐
        </Chakra.Box>
        <Components.DeckContainer
          decks={topSixDecks}
        />
      </Chakra.Box>
    </Chakra.Box>
  );
}

export async function getStaticProps() {
  const queryClient = new ReactQuery.QueryClient();

  await queryClient.prefetchQuery([QK_TOP_SIX_DECKS], getTopSixDecks);

  return {
    props: {
      dehydratedState: ReactQuery.dehydrate(queryClient),
    },
  };
}

async function getTopSixDecks() {
  const response = await axios
    .get(`${process.env.NEXT_PUBLIC_HOST}/api/decks`)
    .then((res) => res.data)
    .then((data) =>
      data.sort((a, b) => Utils.sortDescCompareFn(a.rating, b.rating))
    )
    .then((sortedData) => sortedData.slice(0, 6));

  return response;
}

export default Community;