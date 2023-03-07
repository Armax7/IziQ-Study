import * as Components from "../../components";
import * as Chakra from "@chakra-ui/react";
import * as Utils from "../../utils";

function CardDetailsContainer({dbCards}) {
  if (!Array.isArray(dbCards)) {
    throw new TypeError("dbCards must be an array");
  }

  return (
    <Chakra.Container centerContent={true}>
      {dbCards.map((card, index) => (
        <Components.CardDetails
          id={card.id}
          question={card.question}
          answer={card.answer}
          deck_id={card.deck_id}
          learned={card.learned}
        />
      ))}
    </Chakra.Container>
  );
}

export default CardDetailsContainer;
