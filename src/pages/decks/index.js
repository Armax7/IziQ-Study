import * as Components from "../../components";
import { useEffect, useState } from "react";
import * as SupaHelpers from "../api/supabase_helpers";
import { supabase } from "../api/supabaseClient";
import * as Chakra from "@chakra-ui/react";

const Decks = () => {
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);

  const [categories, setCategories] = useState([]);
  const [allUserDecks, setAllUserDecks] = useState([]);

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
  }, [userID]);

  function filterDecks(e) {
    setDecks(allUserDecks);
    if (e.target.value) {
      let cambios = allUserDecks.filter((c) => c.category_id == e.target.value);

      setDecks(cambios);
    }
  }

  return (
    <div>
      <h1> Filter your deck</h1>
      <Components.Dropdown
        options={[...categories]}
        onChange={filterDecks}
        m="auto"
        bg="white"
        size="lg"
        width="10%"
        borderRadius="10px"
        font="inherit"
        lineHeight="center"
        padding="2em 0.1em 2em 1em"
      />
      <Chakra.Box>
        <Components.DeckContainer decks={decks} />
      </Chakra.Box>
    </div>
  );
};

export default Decks;
