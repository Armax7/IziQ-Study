import * as Components from "../../components";
import * as Chakra from "@chakra-ui/react";

function CardDetailsContainer({
  dbCards,
  itemOnSubmitFn,
  itemOnDeleteFn,
  ...props
}) {
  if (!Array.isArray(dbCards)) {
    throw new TypeError("dbCards must be an array");
  }

  return (
    <Chakra.VStack {...props}>
      {dbCards.map((card, index) => (
        <Components.CardDetails
          key={index}
          id={card.id}
          question={card.question}
          answer={card.answer}
          deck_id={card.deck_id}
          learned={card.learned}
          image={card.image}
          onDeleteFn={itemOnDeleteFn}
          onSubmitFn={itemOnSubmitFn}
        />
      ))}
    </Chakra.VStack>
  );
}

export default CardDetailsContainer;
