import * as Components from "../../../../components"
import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import * as Chakra from "@chakra-ui/react";
import * as SupaHelpers from "../../../api/supabase_helpers"

function MemoryCardGame() {
  const router = useRouter();
  const { id } = router.query;
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  const [numberSuccesses, setnumberSuccesses] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3);
  const [isBlocked, setIsBlocked] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [messageStarted, setMessageStarted] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [isReloadDisabled, setIsReloadDisabled] = useState(true);

  useEffect(async () => {
    const cardsBDs = await SupaHelpers.get.cardsByDeckId(id);
    shuffleArray(cardsBDs);
    const cardsBD = cardsBDs.slice(0, 6);

    if (cardsBD.length > 0) {
      const copiaCard = [];

      for (let i = 0; i < cardsBD.length; i++) {
        const card1 = {
          name: cardsBD[i].id,
          face: cardsBD[i].question,
          image: cardsBD[i].image,
        };
        const card2 = {
          name: cardsBD[i].id,
          face: cardsBD[i].answer, 
          image: cardsBD[i].image,
        };
        copiaCard.push(card1);
        copiaCard.push(card2);
      }
      shuffleArray(copiaCard);
      setCards(copiaCard);
    }
  }, [id, !cards.length]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    } else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  };

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
      match
        ? setnumberSuccesses(numberSuccesses + 2)
        : setnumberSuccesses(numberSuccesses);
    }
  };

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  };

  function reloadPage() {
    // Almacenar la posición actual de la ventana en el localStorage
    localStorage.setItem("scrollPosition", window.scrollY.toString());
    // Recargar la página
    window.location.reload();
  }

  useEffect(() => {
    if (cards.length > 0 && numberSuccesses === cards.length) {
      setIsReloadDisabled(false);
      setMessageSuccess(true);
    }
  }, [numberSuccesses]);

  const handleStartGame = () => {
    setIsBlocked(false);
    setTimeLeft(3);
    setGameStarted(true);
    setMessageStarted(true);
  };

  useEffect(() => {
    let timer;
    if (timeLeft > 0 && !isBlocked) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsBlocked(false);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, isBlocked]);

  return (
    <div>
      {cards.length > 0 && (
        <>
          <Chakra.Box
            background="linear-gradient(to bottom, #360568, #582987)"
            padding="5px 0 30px 0"
            borderRadius="10px"
            width="900px"
            height="600px"
            margin="20px auto"
            boxShadow="0px 0px 5px 0px rgba(0,0,0,0.75)"
            fontFamily="Montserrat, Noto Sans Arabic, Helvetica Neue, Helvetica, Arial, sans-serif"
          >
            <Chakra.Box
              as="h1"
              textAlign="center"
              fontSize="4xl"
              fontWeight="bold"
              width="900px"
              color="white"
              mb="2"
              padding="1"
            >
              ✨ Memory Game 🤓 🧠 ✨
            </Chakra.Box>
            <Chakra.Box
              width="900px"
              height="450px"
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
            >
              {cards.map((card, index) => (
                <Components.MemoryCardGame
                  key={index}
                  card={card.name}
                  image={card.image}
                  number={index}
                  frontFace={card.face}
                  flipCard={flipCard}
                  unflippedCards={unflippedCards}
                  disabledCards={disabledCards}
                  isBlocked={isBlocked}
                />
              ))}

              <Chakra.Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                {timeLeft > 0 && messageStarted ? (
                  <Chakra.Box
                    as="strong"
                    border="1px solid black"
                    padding="2"
                    color="rgb(51, 51, 51)"
                    mr="2"
                    mb="2"
                    mt="3"
                    bg="white"
                    boxShadow="0px 0px 5px 0px rgba(0,0,0,0.75)"
                    borderRadius="10px"
                  >
                    El juego Iniciará en {timeLeft} segs ⏳
                  </Chakra.Box>
                ) : null}
                {messageSuccess && (
                  <Chakra.Box
                    as="strong"
                    border="1px solid black"
                    padding="2"
                    color="rgb(51, 51, 51)"
                    mr="2"
                    mb="2"
                    mt="3"
                    bg="white"
                    boxShadow="0px 0px 5px 0px rgba(0,0,0,0.75)"
                    borderRadius="10px"
                  >
                    Felicitaciones!!! 🎉🎉🎉 😎
                  </Chakra.Box>
                )}

                <Chakra.Button
                  bg="rgb(51, 51, 51)"
                  cursor="pointer"
                  color="white"
                  margin="4"
                  onClick={handleStartGame}
                  disabled={gameStarted}
                  boxShadow="0px 0px 5px 0px rgba(0,0,0,0.75)"
                >
                  Iniciar
                </Chakra.Button>

                <Chakra.Button
                  bg="rgb(51, 51, 51)"
                  cursor="pointer"
                  color="white"
                  onClick={reloadPage}
                  disabled={isReloadDisabled}
                  boxShadow="0px 0px 5px 0px rgba(0,0,0,0.75)"
                >
                  Reiniciar
                </Chakra.Button>
              </Chakra.Flex>
            </Chakra.Box>
          </Chakra.Box>
        </>
      )}
    </div>
  );
}

export default MemoryCardGame;
