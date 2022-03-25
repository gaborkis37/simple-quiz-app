import axios from "axios";
import { Difficulty } from "../types/Quiz/Difficulty";

export const getQuestionsForUser = async (
  userId: string | undefined,
  totalQuestions: number,
  difficulty: Difficulty
) => {
  return await axios.get(
    `http://localhost:9000/quiz/questions/user/${userId}/amount/${totalQuestions}/difficulty/${difficulty}`
  );
};

export const checkUserAnswer = async (
  userId: string | undefined,
  answer: string,
  question: string
) => {
  return await axios.post("http://localhost:9000/quiz/questions/check", {
    userId: userId,
    answer: answer,
    question: question,
  });
};

export const deleteUserQuestions = async (userId: string | undefined) => {
  return await axios.delete(`http://localhost:9000/quiz/questions/${userId}`);
};
