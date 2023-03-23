import { useState, useEffect } from "react";
import * as Chakra from "@chakra-ui/react";
import styles from "./MultipleChoise.module.css";

const MultipleChoice = ({
  question,
  options,
  answer,
  image,
  isLastQuestion,
  onNextQuestion,
  onFinishQuiz,
  onScoreUpdate,
}) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [round, setRound] = useState(1);

  useEffect(() => {
    setIsAnswered(false);
    setIsCorrect(false);
    setSelectedOption(null);
  }, [question]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const isCorrectAnswer = option === answer;
    setIsCorrect(isCorrectAnswer);
    setIsAnswered(true);
    if (isCorrectAnswer) {
      onScoreUpdate(true);
    }
  };

  const handleNextClick = () => {
    setIsAnswered(false);
    setIsCorrect(false);
    setSelectedOption(null);
    setRound(round + 1);
    if (isLastQuestion) {
      onFinishQuiz();
      setRound((round = 1));
    } else {
      onNextQuestion();
    }
  };

  const textColor = isCorrect ? "green" : isAnswered ? "red" : "inherit";
  const optionsCopy = [...options];
  optionsCopy.sort((a, b) => a.localeCompare(b));

  return (
    <Chakra.Box
      borderWidth="1px"
      borderRadius="md"
      p={4}
      bgColor="#FFFFFF"
      w="840px"
      h="480px"
      mx="auto"
      position="relative"
      boxShadow="lg"
    >
      <Chakra.Box mb={4} height="60%">
        {image ? (
          <div className={styles.data}>
            <Chakra.Text fontSize="40px" fontWeight="bold">
              {question}
            </Chakra.Text>
          </div>
        ) : (
          <Chakra.Flex height="100%">
            <div className={styles.data}>
              <Chakra.Text
                fontSize={{ base: "30px", md: "40px" }}
                maxFontSize={{ base: "30px", md: "40px" }}
                fontWeight="bold"
                lineHeight="100%"
                textAlign="center"
                margin={question.length < 30 ? "auto" : 0}
              >
                {question}
              </Chakra.Text>
            </div>
          </Chakra.Flex>
        )}
        <Chakra.Box mb={4}>
          {image && (
            <Chakra.Image
              src={image}
              alt={question}
              maxW="200px"
              mt={4}
              mx="auto"
            />
          )}
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box mt={3} mb={5} textAlign="center">
        <Chakra.Text fontSize="lg" fontWeight={500} color={textColor}>
          {isAnswered
            ? isCorrect
              ? "¡Felicidades, has acertado!"
              : "¡No hay problema, todavía estás aprendiendo!"
            : "Selecciona la definición correcta"}
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.Grid templateColumns="repeat(2, 1fr)" gap={2} mt={1}>
        {optionsCopy.map((option, index) => (
          <Chakra.GridItem key={index}>
            <Chakra.Button
              w="full"
              h="48px"
              focusBorderColor="transparent"
              colorScheme={
                selectedOption === option
                  ? isCorrect
                    ? "green"
                    : "red"
                  : "blue"
              }
              onClick={() => handleOptionClick(option)}
              className={isAnswered ? styles.disabled : ""}
              color="#FFFFFF"
              overflow="hidden"
              _hover={{ bgColor: "#A1AAF3" }}
              border="none"
              boxShadow="none"
              outline="none"
              _focus={{ boxShadow: "none" }}
              isTruncated
              fontWeight="bold"
            >
              {option.length < 18 ? option : `${option.slice(0, 30)} ...`}
            </Chakra.Button>
          </Chakra.GridItem>
        ))}
      </Chakra.Grid>
      {isAnswered && (
        <Chakra.Slide direction="bottom" in={isAnswered} style={{ zIndex: 10 }}>
          <Chakra.Flex
            justify="center"
            align="center"
            bgColor="#313131"
            h="70px"
            gap="440px"
          >
            <Chakra.Text fontSize="lg" fontWeight="bold" color="#FFFFFF">
              Completaste la ronda N° {round}
            </Chakra.Text>
            <Chakra.Button
              onClick={handleNextClick}
              bgColor="#5C66BB"
              _hover={{ bgColor: "#A1AAF3" }}
              color="#FFFFFF"
              h="45px"
              fontSize="md"
              fontWeight="bold"
            >
              {isLastQuestion ? "Finalizar el quiz" : "Siguiente pregunta"}
            </Chakra.Button>
          </Chakra.Flex>
        </Chakra.Slide>
      )}
    </Chakra.Box>
  );
};

export default MultipleChoice;
