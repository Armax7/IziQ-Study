import * as Chakra from "@chakra-ui/react";
import Feature from "./deckContainer_helpers/Feature";
import { DeckCover } from "../DeckCover/DeckCover";

function DeckContainer({ decks }) {
  return (
    <Chakra.Stack
      spacing={8}
      direction="column"
      backgroundColor="#f2f2f2"
      margin="10px"
      justifyContent="space-evenly"
    >
      <Chakra.Box display="flex" justifyContent="space-evenly">
        <Chakra.Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {decks?.map((deck) => (
            <DeckCover
              key={deck.id}
              name={deck.name}
              description={deck.description}
              total_cards={deck.total_cards}
              status={deck.status}
            />
          ))}
        </Chakra.Grid>
      </Chakra.Box>
    </Chakra.Stack>
  );
}

export default DeckContainer;
