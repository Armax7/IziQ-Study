import { useState, useEffect } from "react";
import { Box, Text, Button, Center, Spacer } from "@chakra-ui/react";

const MultipleChoice = ({
  question,
  options,
  answer,
  isLastQuestion,
  onNextQuestion,
  onFinishQuiz,
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

  return (
    <Box borderWidth="1px" borderRadius="md" p={4} bgColor="#FFFFFF">
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold" textAlign="center">
          {question}
        </Text>
      </Box>
      {options.map((option) => (
        <Box key={option} mb={2}>
          <Button
            w="full"
            colorScheme={
              selectedOption === option ? (isCorrect ? "green" : "red") : "blue"
            }
            onClick={() => handleOptionClick(option)}
            disabled={isAnswered}
            color="#FFFFFF"
            _hover={{ bgColor: "#A1AAF3" }}
          >
            {option}
          </Button>
        </Box>
      ))}
      {isAnswered && (
        <Box mt={4}>
          <Center>
            <Box
              px={4}
              py={2}
              borderRadius="md"
              color="white"
              bg={isCorrect ? "green.500" : "red.500"}
            >
              <Text>{isCorrect ? "¡Correcto!" : "Incorrecto"}</Text>
            </Box>
          </Center>
          {isCorrect && (
            <Box mt={3} mb={3} textAlign="center">
              <Text fontSize="md">¡Felicidades, has acertado!</Text>
            </Box>
          )}
          <Spacer mt={2} />
          <Button
            onClick={handleNextClick}
            w="full"
            bgColor="#5C66BB"
            _hover={{ bgColor: "#A1AAF3" }}
            color="#FFFFFF"
          >
            {isLastQuestion ? "Finalizar quiz" : "Siguiente pregunta"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default MultipleChoice;
