import * as Chakra from "@chakra-ui/react";
import { DeckCover } from "../DeckCover/DeckCover";
import Link from "next/link";

function DeckContainer({ decks, ...props }) {
  return (
    <Chakra.Stack
      spacing={8}
      direction="column"
      backgroundColor="#f2f2f2"
      margin="10px"
      justifyContent="space-evenly"
      borderRadius={"3rem"}
      w={"90%"}
      m="auto"
      mt={"1rem"}
      {...props}
    >
      <Chakra.Box display="flex" justifyContent="space-evenly">
        <Chakra.Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {decks?.map((deck) => (
            <Link href={`/decks/${deck.id}`}>
              <a>
                <DeckCover
                  key={deck.id}
                  name={deck.name}
                  description={deck.description}
                  total_cards={deck.total_cards}
                  rating={deck.rating}
                />
              </a>
            </Link>
          ))}
        </Chakra.Grid>
      </Chakra.Box>
    </Chakra.Stack>
  );
}

export default DeckContainer;
