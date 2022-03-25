import { UserObject } from "../UserObject";

export type QuizProps = {
  loading: boolean;
  onLoadingChange: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserObject;
  onUserChange: React.Dispatch<React.SetStateAction<UserObject>>;
};
