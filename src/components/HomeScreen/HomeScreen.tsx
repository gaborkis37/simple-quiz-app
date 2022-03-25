import React, { useState, useEffect } from "react";
import {
  AllTimeScore,
  AllTimScoreHeader,
  Button,
  GlobalStyle,
  Input,
  InputWrapper,
  Label,
  LabelWrapper,
  LastScore,
  LastScoreHeader,
  UserListItem,
  UserListWraper,
  Username,
  UserNameHeader,
  Wrapper,
} from "../../App.styles";
import { createUser, getUsers } from "../../services/UserService";
import { HomeScreenProps } from "../../types/HomeScreen/HomeScreenProps";
import { UserWithScore } from "../../types/HomeScreen/UserWithScore";
import { UserObject } from "../../types/UserObject";

const HomeScreen: React.FC<HomeScreenProps> = ({
  loading,
  username,
  onUsernameChange,
  onLoadingChange,
  onUserChange,
}) => {
  const [userList, setUserList] = useState<UserWithScore[]>([]);

  useEffect(() => {
    getUsers()
      .then((response) => setUserList(response.data))
      .catch((err) => console.log(err));
  }, []);

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
      <Wrapper>
        <h2>High scores</h2>
        <UserListWraper>
          <UserListItem>
            <UserNameHeader>Username:</UserNameHeader>
            <LastScoreHeader>Recent score:</LastScoreHeader>
            <AllTimScoreHeader>All time score:</AllTimScoreHeader>
          </UserListItem>
          {userList.length !== 0 ? (
            userList.map((user) => (
              <UserListItem key={user?.username}>
                <Username>{user?.username}</Username>
                <LastScore>{user?.recentScore}</LastScore>
                <AllTimeScore>{user?.allTimeScore}</AllTimeScore>
              </UserListItem>
            ))
          ) : (
            <p>No user available</p>
          )}
        </UserListWraper>
      </Wrapper>
    </>
  );
};

export default HomeScreen;
