import * as Chakra from "@chakra-ui/react";
import Feature from "./deckContainer_helpers/Feature";
import { DeckCover } from "../DeckCover/DeckCover";


function DeckContainer(/*{ decks, num_decks }*/) {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const getIdUser = async () => {
      const user = await supabase.auth.getUser();
      const userID = user.data.user.id;
      setUserId(userID);
      getUserDeck(userID);
    };
    getIdUser();
    // const fetchCategories = async () => {
    //   const { data } = await supabase.from("categories").select("name");
    //   const options = data.map((category) => ({
    //     value: category.name,
    //     label: category.name,
    //   }));
    //   setOptions(options);
    // };
    // fetchCategories();
  }, []);

  const getUserDeck = async (userID) => {
    const { data: decks, error } = await supabase
      .from("decks")
      .select(
        "id, name, description, total_cards, status, category_id, subcategory_id"
      )
      .eq("user_id", userID)
      .order("created_at", { ascending: false })
      .limit(6);

    if (error) {
      alert(error);
      return null;
    }
    console.log(decks);
    console.log(typeof decks);
    setDecks(decks);
  };

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
        Decks {userID}
      </Chakra.Heading>
      {/* <Chakra.Select value={selectedOption} onChange={handleCategoryChange}>
        <option value="all">All</option>
        {options.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </Chakra.Select> */}
      <Chakra.Button onClick={viewSelectDeck}>View decks</Chakra.Button>
      <Chakra.Box display="flex" justifyContent="space-evenly">
        <Chakra.Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {decks.map((deck) => (
            ///Feature es Mock de DeckCover, reemplazar una vez exista el componente
            <DeckCover
              key={deck.id}
              name={deck.name}
              description={deck.description}
              total_cards={deck.total_cards}
              status={deck.status}
            />
            ///Feature es Mock de DeckCover, reemplazar una vez exista el componente
          ))}
        </Chakra.Grid>
      </Chakra.Box>
    </Chakra.Stack>
  );
}

export default DeckContainer;
