import * as Chakra from "@chakra-ui/react";
import Feature from "./deckContainer_helpers/Feature";
import { DeckCover } from "../DeckCover/DeckCover";

function DeckContainer({ decks }) {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedOption(event.target.value);
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
