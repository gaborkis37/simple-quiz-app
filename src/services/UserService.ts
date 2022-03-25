import axios from "axios";

export const createUser = async (username: string) => {
  return await axios.post("http://localhost:9000/users", {
    username,
  });
};
