import * as Chakra from "@chakra-ui/react";
import { DeckCover } from "../DeckCover/DeckCover";
import Link from "next/link";

function DeckContainer({
  decks,
  columns = [2, null, 3],
  spacing = "0em",
  //px = "1vw",
  paddingBottom = "1vw",
  //backgroundColor = "white",
  //width = "80%",
  margin = "20px auto",
  borderRadius = "10px",
  marginLeft = "20px",
  marginRight = "20px",
  ...props
}) {
  return (
    <Chakra.SimpleGrid
      columns={columns}
      spacing={spacing}
      //px={px}
      paddingBottom={paddingBottom}
      //backgroundColor={backgroundColor}
      //width={width}
      margin={margin}
      borderRadius={borderRadius}
      marginLeft={marginLeft}
      marginRight={marginRight}
      {...props}
    >
      {decks?.map((deck, index) => (
        <Link key={index} href={`/decks/${deck.id}`}>
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
    </Chakra.SimpleGrid>
  );
}

export default DeckContainer;