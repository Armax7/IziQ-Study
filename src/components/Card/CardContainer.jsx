import Card from "./Card";
import styles from "./Card.module.css";
import ArrowContainer from "./ArrowContainer";
import { useState } from "react";

function CardContainer({ cards }) {
  const [currentCard, setCurrentCard] = useState(0);
  const card = cards[currentCard];
  const maxIndex = cards.length;
  return (
    <div className={styles.CardContainer}>
      {cards.length && (
        <Card
          key={card.id}
          id={card.id}
          question={card.question}
          answer={card.answer}
          img={card.image}
          deck_id={card.deck_id}
          learned={card.learned}
        />
      )}
      <ArrowContainer
        maxIndex={maxIndex}
        setCurrentCard={setCurrentCard}
        currentCard={currentCard}
      />
    </div>
  );
}

export default CardContainer;
