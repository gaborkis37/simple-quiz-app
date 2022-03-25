import styled, { createGlobalStyle } from "styled-components";
import BGIMAGE from "./images/ali-abdul-rahman-9Itl-03hLao-unsplash.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGIMAGE});
        background-size: cover;
        margin: 0 ;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    * {
        box-sizing: border-box;
        font-family: "Catamaran", sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
  }

  h1 {
    font-family: Fascinate Impact, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz--webkit-text-fill-color: transparent;
    filter: drop-shadow(2px, 2px, #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    font-weight: 400;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0 5px 10px, rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 20px;
  }

  .start {
    max-width: 200px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 60%;
  margin: 0 10px;
  border-radius: 20px;
  border: none;
  padding: 10px;
`;

export const LabelWrapper = styled.div`
  width: 59%;
  text-align: start;
`;

export const Label = styled.label`
  font-weight: 200;
  font-size: 12px;
  color: gray;
`;

export const Button = styled.button`
  background-color: transparent;
  color: gray;
  border: 1px solid gray;
  border-radius: 1em;
  padding: 5px 15px;
  margin-top: 10px;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export const UserListWraper = styled.div`
  width: 100%;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserListItem = styled.div`
  display: flex;
  width: 80%;
  border: 0.5px solid lightgray;
  padding: 20px;
  margin: 5px 0;
  align-items: center;

  &:nth-child(1) {
    background-color: lightgrey;
  }

  :nth-child(even) {
    background-color: #ebfee8;
  }
  border-radius: 30px;
`;

export const UserNameHeader = styled.div`
  flex: 1;
`;

export const LastScoreHeader = styled.div`
  flex: 2;
`;

export const AllTimScoreHeader = styled.div`
  flex: 2;
`;

export const Username = styled.div`
  font-weight: 600;
  font-size: 1rem;
  flex: 1;
`;

export const LastScore = styled.div`
  font-weight: 400;
  font-size: 16px;
  flex: 2;
`;

export const AllTimeScore = styled.div`
  font-weight: 400;
  font-size: 16px;
  flex: 2;
`;
