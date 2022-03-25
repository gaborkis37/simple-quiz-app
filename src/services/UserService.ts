import axios from "axios";

const BASE_URL = "http://localhost:9000/users";

export const createUser = async (username: string) => {
  return await axios.post(BASE_URL, {
    username,
  });
};

export const getUsers = async () => {
  return await axios.get(BASE_URL);
};

export const addScore = async (userId: string | undefined, score: number) => {
  return await axios.put(`${BASE_URL}/${userId}`, {
    score,
  });
};
