import axios from "axios";
import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import * as Chakra from "@chakra-ui/react";
import { supabase } from "../api/supabaseClient";
import * as SupaHelpers from "../api/supabase_helpers";
import * as Components from "../../components";
import * as ReactQuery from "@tanstack/react-query";

const HOST = process.env.NEXT_PUBLIC_HOST;
const QK_USER_ID = "user-id";
const QK_DECKS = "decks";
const QK_CATEGORIES = "categories";
const QK_SUBCATEGORIES = "subcategories";
const QK_CURRENT_CATEGORY = "current-category";
const QK_CURRENT_SUBCATEGORY = "subcurrent-category";

const Decks = () => {
  const queryClient = ReactQuery.useQueryClient();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [decks, setDecks] = useState([]);

  const [subcategories, setSubCategories] = useState([]);

  const { data: userID } = ReactQuery.useQuery([QK_USER_ID], getUserID);

  const {
    isLoading: decks_isLoading,
    isError: decks_isError,
    data: allUserDecks,
    error: decks_error,
  } = ReactQuery.useQuery([QK_DECKS], () => getUserDecks(userID), {
    onSuccess: (decks) => setDecks(decks),
    enabled: !!userID,
  });

  const {
    isLoading: categories_isLoading,
    isError: categories_isError,
    data: categories,
    error: categories_error,
  } = ReactQuery.useQuery([QK_CATEGORIES], getCategories);

  const {
    isLoading: subcategories_isLoading,
    isError: subcategories_isError,
    data: allSubCategories,
    error: subcategories_error,
  } = ReactQuery.useQuery([QK_SUBCATEGORIES], getSubCategories);

  const deckFormMutation = ReactQuery.useMutation(postDeck, {
    onSuccess: () => {
      queryClient.invalidateQueries(QK_DECKS);
    },
  });
  const deckDeleteMutation = ReactQuery.useMutation(deleteDeck, {
    onSuccess: () => {
      queryClient.invalidateQueries(QK_DECKS);
    },
  });

  function filterDecksByCategory(e) {
    const localSubcategories = allSubCategories.filter((sc) => {
      return sc.category_id == e.target.value;
    });

    setSubCategories(localSubcategories);

    setDecks(allUserDecks);
    if (e.target.value) {
      let cambios = allUserDecks.filter((c) => c.category_id == e.target.value);

      setDecks(cambios);
    }
  }

  function filterDecksBySubCategory(e) {
    setDecks(allUserDecks);
    if (e.target.value) {
      let cambios2 = allUserDecks.filter(
        (c) => c.subcategory_id == e.target.value
      );

      setDecks(cambios2);
    }
  }

  function handleOnDelete(event) {
    return deckDeleteMutation.mutate(event);
  }

  if (decks_isLoading || categories_isLoading || subcategories_isLoading) {
    return <Components.LoadingScreen />;
  }

  return (
    <Chakra.Box
      borderRadius="10px"
      fontFamily="Poppins"
      fontWeight="normal"
      fontSize="25px"
      textAlign="center"
    >
      <Chakra.Box padding="5">
        <Chakra.Button
          bg="rgb(51, 51, 51)"
          color="white"
          boxShadow="lg"
          onClick={onOpen}
        >
          Crear Mazo
        </Chakra.Button>
      </Chakra.Box>

      <Chakra.Box
        as="h1"
        textAlign="center"
        fontSize="3xl"
        fontWeight="bold"
        color="white"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
      >
        ✨ Filtra tus Mazos 📁 ✨
      </Chakra.Box>

      <Chakra.Box as="strong" textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)">
        Categoría:
        <Components.Dropdown
          options={[...categories]}
          onChange={filterDecksByCategory}
          color="black"
          size="lg"
          width="16%"
          bgColor="white"
          borderRadius="10px"
          display="inline-block"
          font="inherit"
          lineHeight="center"
          borderColor="black"
          padding="0.5em 0.1em 0em 0.5em"
          marginRight="20px"
        />
        Subcategoría:
        <Components.Dropdown
          options={[...subcategories]}
          onChange={filterDecksBySubCategory}
          color="black"
          size="lg"
          width="16%"
          bgColor="white"
          borderRadius="10px"
          display="inline-block"
          font="inherit"
          lineHeight="center"
          borderColor="black"
          padding="0.5em 0.1em 0em 0.5em"
        />
      </Chakra.Box>
      <Components.DeckContainer
        decks={decks}
        onDeleteDeck={handleOnDelete}
        isOwnedDecks={true}
      />

      <Chakra.Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        size="full"
      >
        <Chakra.DrawerContent>
          <Chakra.DrawerCloseButton
            backgroundColor="#F5E9CF"
            color="red"
            mr={960}
            mt="3"
          />
          <Chakra.DrawerBody>
            <Components.DeckForm
              onCreateFn={deckFormMutation.mutate}
              onCloseFn={onClose}
            />
          </Chakra.DrawerBody>
        </Chakra.DrawerContent>
      </Chakra.Drawer>
    </Chakra.Box>
  );
};

export async function getStaticProps() {
  const queryClient = new ReactQuery.QueryClient();

  await queryClient.prefetchQuery([QK_USER_ID], getUserID);
  await queryClient.prefetchQuery([QK_CATEGORIES], getCategories);
  await queryClient.prefetchQuery([QK_SUBCATEGORIES], getSubCategories);

  return {
    props: {
      dehydratedState: ReactQuery.dehydrate(queryClient),
    },
  };
}

async function getUserID() {
  const response = await SupaHelpers.get.userId();
  return response;
}

async function getCategories() {
  const response = await axios
    .get(`http://${HOST}/api/categories`)
    .then((res) => res.data);

  return response;
}

async function getSubCategories() {
  const response = await axios
    .get(`http://${HOST}/api/subcategories`)
    .then((res) => res.data);

  return response;
}

async function getUserDecks(userId) {
  const response = await axios
    .get(`http://${HOST}/api/decks/user-id/${userId}`)
    .then((res) => res.data);

  return response;
}

async function postDeck(data) {
  return await axios.post(`http://${HOST}/api/decks`, data);
}

async function deleteDeck(deckData) {
  return await axios.put(`http://${HOST}/api/decks`, deckData);
}

export default Decks;
