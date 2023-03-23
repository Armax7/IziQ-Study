import styles from "./Card.module.css";
import * as Chakra from "@chakra-ui/react";

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
            {/* <img src="https://mckdtyupusnhcabyhyja.supabase.co/storage/v1/object/public/images-client/70e4f5f4-d6fd-4764-8350-86cb50dab301/decks/2323.jpg" /> */}
            {/* <h2>{question}</h2> */}
            <div className={styles.data}>{question}</div>
          </div>
          <div className={styles.flipCardBack}>
            {/* <h1>{answer}</h1> */}
            <Chakra.Container>
              <div className={styles.data}>
                <Chakra.Text
                  display="flex"
                  flexDirection="column"
                  margin="auto 0"
                  lineHeight="90%"
                  fontSize="34px"
                >
                  {answer}
                </Chakra.Text>
              </div>
            </Chakra.Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
