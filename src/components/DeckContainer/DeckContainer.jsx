import * as Chakra from "@chakra-ui/react";
import Feature from "./deckContainer_helpers/Feature";
import { DeckCover } from "../DeckCover/DeckCover";
import { useEffect, useState } from "react";
import { supabase } from "../../pages/api/supabaseClient";

function DeckContainer({ decks, num_decks }) {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase.from("categories").select("name");
      const options = data.map((category) => ({
        value: category.name,
        label: category.name,
      }));
      setOptions(options);
    };
    fetchCategories();
  }, [options]);

  const handleCategoryChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const viewSelectDeck = async () => {
    if (selectedOption === "All") {
      let { data: decks, error } = await supabase.from("decks").select("name");
      if (error) console.log(error);
      console.log(decks);
    } else {
      let { data: decks, error } = await supabase
        .from("decks")
        .select("name")
        .eq("category", selectedOption);
      if (error) console.log(error);
      console.log(decks);
    }
  };

  return (
    <Chakra.Stack
      spacing={8}
      direction="column"
      backgroundColor="#f2f2f2"
      margin="10px"
      justifyContent="space-evenly"
    >
      <Chakra.Heading fontSize="md" marginLeft="5%">
        Decks {num_decks}
      </Chakra.Heading>
      <Chakra.Select value={selectedOption} onChange={handleCategoryChange}>
        <option value="all">All</option>
        {options.map((category) => (
          <option key={category.id} value={category.value}>
            {category.label}
          </option>
        ))}
      </Chakra.Select>
      <Chakra.Button onClick={viewSelectDeck}>View decks</Chakra.Button>
      <Chakra.Box display="flex" justifyContent="space-evenly">
        <Chakra.Grid templateColumns="repeat(3, 1fr)" gap={6}></Chakra.Grid>
      </Chakra.Box>
    </Chakra.Stack>
  );
}

export default DeckContainer;
