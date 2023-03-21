import { useState, useEffect } from "react";
import * as Chakra from "@chakra-ui/react";
import styles from "../../styles/MultipleChoise.module.css";

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
    if (isLastQuestion) {
      onFinishQuiz();
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
      w="750px"
      h="480px"
      mx="auto"
    >
      <Chakra.Box mb={4}>
        <Chakra.Text fontSize="25px" fontWeight="bold" textAlign="center">
          {question}
        </Chakra.Text>
        <Chakra.Box mb={4}>
          {image && (
            <Chakra.Image
              src={image}
              alt={question}
              maxW="150px"
              mt={2}
              mx="auto"
            />
          )}
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box mt={3} mb={3} textAlign="center">
        <Chakra.Text fontSize="md" color={textColor}>
          {isAnswered
            ? isCorrect
              ? "¡Felicidades, has acertado!"
              : "¡No hay problema, todavía estás aprendiendo!"
            : "Selecciona la definición correcta"}
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.Grid templateColumns="repeat(2, 1fr)" gap={2}>
        {optionsCopy.map((option, index) => (
          <Chakra.GridItem key={index} mb={2}>
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
            >
              {option}
            </Chakra.Button>
          </Chakra.GridItem>
        ))}
      </Chakra.Grid>
      {isAnswered && (
        <Chakra.Box mt={5}>
          <Chakra.Button
            onClick={handleNextClick}
            w="full"
            h="50px"
            bgColor="#5C66BB"
            _hover={{ bgColor: "#A1AAF3" }}
            color="#FFFFFF"
            fontSize="20px"
            fontWeight="bold"
          >
            {isLastQuestion ? "Finalizar quiz" : "Siguiente pregunta"}
          </Chakra.Button>
        </Chakra.Box>
      )}
    </Chakra.Box>
  );
};

export default MultipleChoice;
