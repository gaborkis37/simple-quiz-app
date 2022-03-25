import React from "react";
import {
  Button,
  GlobalStyle,
  Input,
  InputWrapper,
  Label,
  LabelWrapper,
  Wrapper,
} from "../../App.styles";
import { createUser } from "../../services/UserService";
import { HomeScreenProps } from "../../types/HomeScreen/HomeScreenProps";
import { UserObject } from "../../types/UserObject";

const HomeScreen: React.FC<HomeScreenProps> = ({
  loading,
  username,
  onUsernameChange,
  onLoadingChange,
  onUserChange,
}) => {
  const handleClick = async () => {
    onLoadingChange(true);
    const response = await createUser(username);

    const newUser: UserObject = response.data;

    if (newUser) {
      onUserChange(newUser);
    }
    onLoadingChange(false);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Please enter a username</h1>
        <InputWrapper>
          <LabelWrapper>
            <Label htmlFor="username">Username:</Label>
          </LabelWrapper>
          <Input
            type="text"
            id="username"
            placeholder="Please enter a username..."
            onChange={(e) => onUsernameChange(e.target.value)}
          />
          <Button onClick={handleClick}>Submit</Button>
          {loading && <p>Loading questions...</p>}
        </InputWrapper>
      </Wrapper>
    </>
  );
};

export default HomeScreen;
