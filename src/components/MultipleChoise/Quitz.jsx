import { useState } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
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
      console.log('Quiz is finished');
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

  const currentQuestion = cards[currentQuestionIndex];
  const otherQuestions = cards.filter((_, i) => i !== currentQuestionIndex);
  const randomQuestions = shuffle(otherQuestions).slice(0, 3);
  const options = [
    currentQuestion.answer,
    ...randomQuestions.map((q) => q.answer),
  ];

  return (
    <Box>
      {isQuizFinished ? (
        <Box mt={8} mb={8} textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">¡Felicidades, has terminado el quiz!</Text>
          <Text fontSize="xl" fontWeight="bold">Tu puntaje final es {score} de {cards.length}.</Text>
        </Box>
      ) : (
        <Box>
          <Box mb={4}>
            {currentQuestion.image && (
              <Image
                src={currentQuestion.image}
                alt={currentQuestion.question}
                maxW="150px"
                mt={2}
                mx="auto"
              />
            )}
          </Box>
          <MultipleChoice
            question={currentQuestion.question}
            options={shuffle(options)}
            answer={currentQuestion.answer}
            onNextQuestion={handleNextQuestion}
            isLastQuestion={currentQuestionIndex === cards.length - 1}
            onAnswer={handleAnswer}
            onFinishQuiz={handleFinishQuiz}
          />
        </Box>
      )}
    </Box>
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
