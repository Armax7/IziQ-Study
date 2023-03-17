import { useState } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import MultipleChoice from "./MultipleChoise";

const Quiz = ({ cards }) => {
  // Definimos el componente Quiz, que recibe una prop cards
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Creamos el estado currentQuestionIndex y lo inicializamos en 0
  const [score, setScore] = useState(0); // Creamos el estado score y lo inicializamos en 0

  const handleNextQuestion = () => {
    // Definimos la función handleNextQuestion
    if (currentQuestionIndex < cards.length - 1) {
      // Si no hemos llegado a la última pregunta
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Pasamos a la siguiente pregunta
    }
  };

  const handleAnswer = (isCorrect) => {
    // Definimos la función handleAnswer, que recibe un parámetro isCorrect
    if (isCorrect) {
      // Si la respuesta es correcta
      setScore(score + 1); // Aumentamos el puntaje en 1
    }
  };

  const currentQuestion = cards[currentQuestionIndex]; // Obtenemos la pregunta actual
  const otherQuestions = cards.filter((_, i) => i !== currentQuestionIndex); // Obtenemos las otras preguntas (todas menos la actual)
  const randomQuestions = shuffle(otherQuestions).slice(0, 3); // Desordenamos las otras preguntas aleatoriamente y tomamos las 3 primeras
  const options = [
    currentQuestion.answer,
    ...randomQuestions.map((q) => q.answer),
  ]; // Creamos un array de opciones que incluye la respuesta correcta y 3 respuestas incorrectas aleatorias

  const isLastQuestion = currentQuestionIndex === cards.length - 1;
  // Creamos una variable isLastQuestion que indica si estamos en la última pregunta

  return (
    <Box>
      {isLastQuestion ? ( // Si estamos en la última pregunta
        <Box mt={8} mb={8} textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">¡Felicidades, has terminado el quiz!</Text>
        </Box>
      ) : (
        // Si no estamos en la última pregunta
        <Box>
          <Box mb={4}>
            {currentQuestion.image && ( // Si hay una imagen asociada a la pregunta
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
            isLastQuestion={isLastQuestion} // Pasamos la variable isLastQuestion al componente MultipleChoice
            onAnswer={handleAnswer}
          />
          {console.log("isLastQuestion:", isLastQuestion)}
          {console.log("value:", currentQuestionIndex)}
          {console.log("card:", cards.length)}
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
