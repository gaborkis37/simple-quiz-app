import { UserObject } from "../UserObject";

export type HomeScreenProps = {
  username: string;
  loading: boolean;
  onLoadingChange: React.Dispatch<React.SetStateAction<boolean>>;
  onUsernameChange: React.Dispatch<React.SetStateAction<string>>;
  onUserChange: React.Dispatch<React.SetStateAction<UserObject>>;
};
