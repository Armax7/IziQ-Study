import axios from "axios";
import { useRouter } from "next/router";
import * as ReactQuery from "@tanstack/react-query";
import * as Chakra from "@chakra-ui/react";
import * as Components from "../../../components";
import * as SupaHelpers from "../../api/supabase_helpers";
const HOST = process.env.NEXT_PUBLIC_HOST;

export const QK_DECK = "cardsByDeckId";
export const QK_USER_ID = "user-id";
export const QK_OWNER_ID = "owner-id";
export const QK_IS_OWNER = "is-owner";

function Decks() {
  const queryClient = ReactQuery.useQueryClient();
  const router = useRouter();
  const { id: deck_id } = router.query;

  const {
    isLoading: deck_isLoading,
    isError: deck_isError,
    data: cards,
    error: deck_error,
  } = ReactQuery.useQuery([QK_DECK], async () => {
    const response = await axios
      .get(`http://${HOST}/api/cards/deck-id/${deck_id}`)
      .then((res) => res.data);

    return response;
  });

  const {
    isLoading: userId_isLoading,
    isError: userId_isError,
    data: currentUserId,
    error: userId_error,
  } = ReactQuery.useQuery([QK_USER_ID], async () => {
    const response = await SupaHelpers.get.userId();
    return response;
  });

  const {
    isLoading: ownerId_isLoading,
    isError: onwerId_isError,
    data: ownerId,
    error: owner_error,
  } = ReactQuery.useQuery([QK_OWNER_ID], async () => getDeckOwnerId(deck_id));

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

  if (deck_isError || userId_isError || onwerId_isError) {
    return (
      <Chakra.Alert status="error">
        <Chakra.AlertIcon />
        <Chakra.AlertTitle>Error: </Chakra.AlertTitle>
        <Chakra.AlertDescription>
          {deck_isError ?? userId_isError ?? onwerId_isError}
        </Chakra.AlertDescription>
      </Chakra.Alert>
    );
  }

  if (deck_isLoading || userId_isLoading || ownerId_isLoading) {
    return (
      <Components.LoadingScreen />
    );
  }

  return (
    <div>
      <Chakra.VStack align={"stretch"}>
        <Chakra.Box
          alignSelf="center"
          borderRadius="20px"
          width="67%"
          bgColor="#f2f2f2"
          h="650px"
          margin="40px 0 35px 0"
        >
          <Components.CardContainer cards={cards} />
          <Components.DeckDetails deck_id={deck_id} />
        </Chakra.Box>
        <Components.CardDetailsContainer
          dbCards={cards}
          itemOnSubmitFn={mutationEdit.mutate}
          itemOnDeleteFn={mutationDelete.mutate}
          spacing={"1rem"}
          pb={"2rem"}
        />
        {currentUserId === ownerId ? (
          <Components.CardForm
            deckId={deck_id}
            onSubmitFn={mutationPost.mutate}
          />
        ) : null}
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

  await queryClient.prefetchQuery([QK_USER_ID], async () => {
    const response = await SupaHelpers.get.userId();
    return response;
  });

  await queryClient.prefetchQuery([QK_OWNER_ID], async () =>
    getDeckOwnerId(deck_id)
  );

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

async function getDeckOwnerId(deck_id) {
  const response = await axios
    .get(`http://${HOST}/api/decks/id/${deck_id}`)
    .then((res) => res.data.at(0).user_id);

  return response;
}

export default Decks;
