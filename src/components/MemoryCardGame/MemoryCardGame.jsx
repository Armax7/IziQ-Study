import React from "react";
import * as Chakra from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import backFace from "../../../public/studyGame.png";

const MemoryCardGame = (card, isBlocked, number) => {
  const [isFlipped, setIsFlipped] = useState(card.isBlocked ? false : true);
  const [hasEvent, setHasEvent] = useState(true);
  const [isStarting, setIsStarting] = useState(true);
 
  useEffect(() => {
    if (card.unflippedCards.includes(card.number)) {
      setTimeout(() => setIsFlipped(false), 700);
    }
  }, [card.unflippedCards, card.number]);

  useEffect(() => {
    if (card.disabledCards.includes(card.number)) {
      setHasEvent(false);
    }
  }, [card.disabledCards, card.number]);

  useEffect(() => {
    if (isStarting && !card.isBlocked) {
      setIsFlipped(true);
      setTimeout(() => {
        setIsStarting(false);
        setIsFlipped(false);
      }, 3000);
    }
  }, [isStarting, !card.isBlocked]);

  const handleClick = (e) => {
    const value = card.flipCard(card.card, card.number);
    if (value !== 0) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <Chakra.Box
      display="inline-block"
      margin="5px"
      height="calc(150px - 10px)"
      width="calc(215px - 10px)"
      boxShadow="0px 0px 5px 0px rgba(0,0,0,0.75)"
    >
      <ReactCardFlip isFlipped={isFlipped}>
        <Chakra.Image
          src={backFace.src}
          alt="back-face"
          height="calc(150px - 10px)"
          width="calc(215px - 10px)"
          border="1px solid black"
          onClick={hasEvent && !card.isBlocked ? handleClick : null}
        />

        {card.image ? (
          <Chakra.Box
            height="calc(150px - 10px)"
            width="calc(215px - 10px)"
            border="1px solid black"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              overflow: "hidden",
            }}
            onClick={hasEvent && !card.isBlocked ? handleClick : null}
          >
            <Chakra.Image
              height="calc(100px - 10px)"
              width="calc(100px - 10px)"
              src={card.image}
              alt="back-face"
            />

            <Chakra.Box
              paddingLeft={1}
              paddingRight={1}
              paddingBottom={3.5}
              style={{ textAlign: "center", display: "inline-block" }}
            >
              {" "}
              {card.frontFace}
            </Chakra.Box>
          </Chakra.Box>
        ) : (
          <Chakra.Textarea
            height="calc(150px - 10px)"
            width="calc(215px - 10px)"
            border="3px solid black"
            textAlign="center"
            fontSize="20px"
            resize="none"
            bg="white"
            pointerEvents="none"
            value={card.frontFace}
            onClick={hasEvent && !isBlocked ? handleClick : null}
          />
        )}
      </ReactCardFlip>
    </Chakra.Box>
  );
};

export default MemoryCardGame;
