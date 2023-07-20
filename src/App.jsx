import { styled } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import Layout from "./ui/Layout";
import { createContext, useState } from "react";

const Calculator = styled.div`
  width: 400px;
  height: 500px;
  border: 2px solid #00000089;
  margin: 200px auto;
`;
export const DisplayContext = createContext();
function App() {
  const [display, setDisplay] = useState(0);
  const [currentString, setCurrentString] = useState(``);
  const [currentOperator, setCurrentOperator] = useState(``); // [+, -, *, /
  const [lastEnteredDigit, setLastEnteredDigit] = useState(``);
  const displayText = {
    display,
    setDisplay,
    currentString,
    setCurrentString,
    currentOperator,
    setCurrentOperator,
    lastEnteredDigit,
    setLastEnteredDigit,
  };

  return (
    <DisplayContext.Provider value={displayText}>
      <GlobalStyles />
      <Calculator>
        <Layout />
      </Calculator>
    </DisplayContext.Provider>
  );
}

export default App;
