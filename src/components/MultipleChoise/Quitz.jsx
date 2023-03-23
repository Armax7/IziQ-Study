import { useState } from "react";
import * as Chakra from "@chakra-ui/react";
import MultipleChoice from "./MultipleChoise";

const Quiz = ({ cards }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < cards.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Quiz is finished");
      setIsQuizFinished(true);
    }
  };

  const handleAnswer = (isCorrect) => {
    setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (answeredQuestions.length + 1 === cards.length) {
      setIsQuizFinished(true);
    }
  };

  const handleFinishQuiz = () => {
    setIsQuizFinished(true);
  };

  const handleScoreUpdate = (isCorrect) => {
    if (isCorrect) {
      setScore((score) => score + 1);
    }
  };

  const currentQuestion = cards[currentQuestionIndex];
  const otherQuestions = cards.filter((_, i) => i !== currentQuestionIndex);
  const randomQuestions = shuffle(otherQuestions).slice(0, 3);
  const options = [
    currentQuestion.answer,
    ...randomQuestions.map((q) => q.answer),
  ];

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setAnsweredQuestions([]);
    setIsQuizFinished(false);
  };

  return (
    <Chakra.Box>
      {isQuizFinished ? (
        <Chakra.Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
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
          <Chakra.Box display="flex" flexDirection="column">
            <Chakra.Text fontSize="5xl" fontWeight="bold" mt={6} mb={6}>
              ¡Felicidades, has terminado el quiz!
            </Chakra.Text>
            <Chakra.Box fontSize="7xl" mb={4}>
              🎉🎉🎉
            </Chakra.Box>
            <Chakra.Text fontSize="3xl" fontWeight="bold">
              Haz respondido correctamente
              <br />
              {score} de {cards.length}
            </Chakra.Text>
            <Chakra.Button
              bgColor="#313131"
              _hover={{ bgColor: "#666666" }}
              color="#FFFFFF"
              size="lg"
              onClick={() => restartQuiz()}
              mt={10}
            >
              Reiniciar Quiz
            </Chakra.Button>
          </Chakra.Box>
        </Chakra.Box>
      ) : (
        <Chakra.Box>
          <MultipleChoice
            question={currentQuestion.question}
            options={shuffle(options)}
            answer={currentQuestion.answer}
            image={currentQuestion.image}
            onNextQuestion={handleNextQuestion}
            isLastQuestion={currentQuestionIndex === cards.length - 1}
            onAnswer={handleAnswer}
            onFinishQuiz={handleFinishQuiz}
            onScoreUpdate={handleScoreUpdate}
          />
        </Chakra.Box>
      )}
    </Chakra.Box>
  );
};

// Esta función toma un array y lo desordena aleatoriamente
function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default Quiz;
