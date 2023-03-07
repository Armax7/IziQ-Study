import styles from "./Card.module.css";

function Card({ id, question, answer, img, deck_id, learned }) {
  const onClick = () => {
    learned = true;
    const trans = document.getElementById(id);
    if (trans.style.transform == "rotateY(180deg)") {
      trans.style.transform = "rotateY(0deg)";
    } else {
      trans.style.transform = "rotateY(180deg)";
    }
  };

  return (
    <>
      <div className={styles.flipCard} onClick={onClick}>
        <div className={styles.flipCardInner} id={id}>
          <div className={styles.flipCardFront}>
            {img && <img src={img} alt="Avatar" />}
            <h2>{question}</h2>
          </div>
          <div className={styles.flipCardBack}>
            <h1>{answer}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
