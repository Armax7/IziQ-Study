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
        <Chakra.Flex className={style.containerTag}>Top Rated</Chakra.Flex>
        <Components.DeckContainer
          decks={topSixDecks}
          borderRadius={"0 3rem 3rem"}
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
    .get(`http://${HOST}/api/decks`)
    .then((res) => res.data)
    .then((data) =>
      data.sort((a, b) => Utils.sortDescCompareFn(a.rating, b.rating))
    )
    .then((sortedData) => sortedData.slice(0, 6));

  return response;
}

export default Community;
