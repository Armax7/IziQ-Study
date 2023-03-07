import Card from "./Card"
import styles from "./Card.module.css"
import ArrowContainer from "./ArrowContainer"
import { useState } from "react"


function CardContainer() {
  const [currentCard,setCurrentCard] = useState(0)
  const cards = [
    {
      id:1,
      question:"how do you say flower in spanish?",
      answer:"Flor",
      img:"https://freesvg.org/img/flower-peterm-01.png",
      deck_id:56,
      learned:false
    },
    {
      id:2,
      question:"how do you say door in spanish?",
      answer:"Puerta",
      img:"https://cdn-icons-png.flaticon.com/512/5692/5692094.png",
      deck_id:56,
      learned:false
    },
    {
      id:3,
      question:"how do you say run in spanish?",
      answer:"correr",
      img:"https://bodybalancephysicaltherapy.com/wp-content/uploads/2020/06/Artboard-8@2xs.png",
      deck_id:56,
      learned:false
    },
    {
      id:4,
      question:"how do you say sleep in spanish?",
      answer:"dormir",
      img:"https://png.pngtree.com/png-clipart/20220420/original/pngtree-cartoon-quilt-sleeping-png-image_7549433.png",
      deck_id:56,
      learned:false
    },
    {
      id:5,
      question:"how do you say nose in spanish?",
      answer:"nariz",
      img:"https://png.pngtree.com/png-clipart/20221204/ourmid/pngtree-cartoon-nose-png-image_6499305.png",
      deck_id:56,
      learned:false
    },
  ]
  const card = cards[currentCard]
  const maxIndex = cards.length
  return (
    <div className={styles.CardContainer}>
      {cards.length &&
        <Card 
        key={card.id}
        id={card.id}
        question={card.question}
        answer={card.answer}
        img={card.img}
        deck_id={card.deck_id}
        learned={card.learned}
        />
      }
      <ArrowContainer maxIndex={maxIndex} setCurrentCard={setCurrentCard} currentCard={currentCard}/>
    </div>
  )
}

export default CardContainer