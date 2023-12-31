import logo from "./logo.svg";
import "./App.css";
import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotationAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  border-radius: 100px;
}
100% {
  transform: rotate(360deg);
  border-radius: 0px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
      {/* <Box>
        <Emoji>😀</Emoji>
      </Box>
      <Emoji>🔥</Emoji> */}
    </Wrapper>
  );
}

export default App;
