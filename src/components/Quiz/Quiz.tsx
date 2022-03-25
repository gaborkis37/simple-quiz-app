import { useState } from "react";
import { GlobalStyle, Wrapper } from "../../App.styles";
import {
  checkUserAnswer,
  deleteUserQuestions,
  getQuestionsForUser,
} from "../../services/QuizService";
import { addScore } from "../../services/UserService";
import { AnswerObject } from "../../types/Quiz/AnswerObject";
import { CheckAnswerResponse } from "../../types/Quiz/CheckAnswerResponse";
import { Difficulty } from "../../types/Quiz/Difficulty";
import { Questions } from "../../types/Quiz/Questions";
import { QuizProps } from "../../types/Quiz/QuizProps";
import QuestionCard from "../QuestionCard/QuestionCard";

const TOTAL_QUESTIONS = 10;

const Quiz: React.FC<QuizProps> = ({
  loading,
  onLoadingChange,
  user,
  onUserChange,
}) => {
  const [gameOver, setGameOver] = useState(true);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);

  const startTrivia = async () => {
    onLoadingChange(true);
    setGameOver(false);

    const response = await getQuestionsForUser(
      user?._id,
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(response.data);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    onLoadingChange(false);
  };

  const checkAnswer = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const response = await checkUserAnswer(
        user?._id,
        answer,
        questions[number].question
      );

      const responseData: CheckAnswerResponse = response.data;

      if (responseData.isCorrect) {
        setScore((prev) => prev + 1);
      }

      const answerObject = {
        question: questions[number].question,
        answer: answer,
        correct: responseData.isCorrect,
        correctAnswer: responseData.correctAnswer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = async () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS - 1) {
      await deleteUserQuestions(user?._id);
      await addScore(user?._id, score);
      setGameOver(true);
      onUserChange(null);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>React quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading && <p>Loading questions...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default Quiz;
