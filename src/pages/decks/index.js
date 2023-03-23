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

const Decks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);

  const [categories, setCategories] = useState([]);
  const [allUserDecks, setAllUserDecks] = useState([]);

  const [allSubCategories, setAllSubCategories] = useState([]);

  const [subcategories, setSubCategories] = useState([]);

  const [filterDecks, setFilterDecks] = useState([]);

  const [filter, setFilter] = useState([]);

  useEffect(async () => {
    const userID = await SupaHelpers.get.userId();
    setUserId(userID);

    const decks = await SupaHelpers.get.userDecks();

    setDecks(decks);
    setAllUserDecks(decks);

    const { data: categories, error } = await supabase
      .from("categories")
      .select("id,name");
    if (error) {
      console.log(error);
    }
    setCategories(categories);

    const { data: subcategories, err } = await supabase
      .from("subcategories")
      .select("id,name,category_id");
    if (err) {
      console.log(error);
    }
    setAllSubCategories(subcategories);
  }, [userID]);

  const queryClient = ReactQuery.useQueryClient();

  const deckFormMutation = ReactQuery.useMutation(postDeck);

  function filterDecksByCategory(e) {
    const localSubcategories = allSubCategories.filter((sc) => {
      return sc.category_id == e.target.value;
    });

    setSubCategories(localSubcategories);

    setDecks(allUserDecks);
    if (e.target.value) {
      let cambios = allUserDecks.filter((c) => c.category_id == e.target.value);
      setFilterDecks(cambios);
      setDecks(cambios);
    }
  }

  function filterDecksBySubCategory(e) {
    if (!e.target.value) {
      setDecks(filterDecks);
    }

    if (e.target.value !== "") {
      setDecks(filterDecks);
      // setear decks que muestre los decks por subcategoria

      let cambios2 = allUserDecks.filter(
        (c) => c.subcategory_id == e.target.value
      );

      setDecks(cambios2);
    }
  }

  const handleChange = (e) => {
   

    

    let sortedDecks = [...decks];


    if (e.target.value === "recent") {
      sortedDecks = sortedDecks.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setDecks(sortedDecks);
    } else if (e.target.value === "oldest") {
      sortedDecks = sortedDecks.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
      setDecks(sortedDecks);
    } else {
      setDecks(decks);
    }
  };

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

      <label> Mazos Recientes:</label>

      <Chakra.Select
        onChange={handleChange}
        color="black"
        size="lg"
        width="10%"
        bgColor="white"
        borderRadius="10px"
        display="inline-block"
        font="inherit"
        lineHeight="center"
        padding="2em 0.1em 2em 1em"
      >
        <option value="recent">Recent</option>
        <option value="oldest">Oldest</option>
      </Chakra.Select>

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

      <Components.DeckContainer decks={decks} />

      <Chakra.Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        size="full"
      >
        <Chakra.DrawerContent>
{/*           <Chakra.DrawerCloseButton
            backgroundColor="#F5E9CF"
            color="red"
            mr={960}
            mt="3"
          /> */}
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
  await queryClient.prefetchQuery([QK_DECKS], getUserDecks);

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

async function getUserDecks(userId) {
  const response = await axios
    .get(`http://${HOST}/api/decks/user-id/${userId}`)
    .then((res) => res.data);

  return response;
}

async function postDeck(data) {
  return await axios.post(`http://${HOST}/api/decks`, data);
}

export default Decks;
