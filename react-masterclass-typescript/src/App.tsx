import logo from "./logo.svg";
import "./App.css";
import styled, { keyframes } from "styled-components";
import Circle from "./Circle";
import { useState } from "react";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <div>
      <Container>
        <H1>protected!</H1>
      </Container>
    </div>
  );
}

export default App;
