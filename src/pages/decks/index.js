import * as Components from "../../components";
import { useEffect, useState } from "react";
import * as SupaHelpers from "../api/supabase_helpers";
import * as Chakra from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { supabase } from "../api/supabaseClient";

const Decks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);

  const [categories, setCategories] = useState([]);
  const [allUserDecks, setAllUserDecks] = useState([]);

  const [allSubCategories, setAllSubCategories] = useState([]);

  const [subcategories, setSubCategories] = useState([]);

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

  function filterDecksByCategory(e) {
    console.log("e.target.value", e.target.value);

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

  return (
<Chakra.Box
        borderRadius="10px"
        fontFamily = "Poppins"
        fontWeight="normal"
        fontSize="25px"
        textTransform="uppercase"
        textAlign="center"
      >
      <Chakra.Button colorScheme="teal" onClick={onOpen}>
        Crear Mazo
      </Chakra.Button>
      
            
        <h1 font="Poppins"> Filter your deck</h1>

        <label> select category :</label>
        <Components.Dropdown
          options={[...categories]}
          onChange={filterDecksByCategory}
          color="black"
          size="lg"
          width="10%"
          bgColor="white"
          borderRadius="10px"
          display="inline-block"
          font="inherit"
          lineHeight="center"
          padding="2em 0.1em 2em 1em"
        />

        <label title=""> select subcategory :</label>
        <Components.Dropdown
          options={[...subcategories]}
          onChange={filterDecksBySubCategory}
          color="black"
          size="lg"
          width="10%"
          bgColor="white"
          borderRadius="10px"
          display="inline-block"
          font="inherit"
          lineHeight="center"
          padding="2em 0.1em 2em 1em"
        />

      <Components.DeckContainer decks={decks} />

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
            <Components.DeckForm />
          </Chakra.DrawerBody>
        </Chakra.DrawerContent>
      </Chakra.Drawer>
      </Chakra.Box>
  );
};

export default Decks;
