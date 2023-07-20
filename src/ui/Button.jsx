import { styled } from "styled-components";
import { useContext, useEffect } from "react";
import { DisplayContext } from "../App";

const StyledButton = styled.button`
  grid-area: ${(props) => props.gridArea};
  background-color: ${(props) => props.color || "#555"};
  border: 1px solid #000;
  color: #fff;
  font-size: 1.5rem;

  &:hover {
    border: 1px solid #fff;
  }
`;

const Button = ({ value, text, gridArea, color, type }) => {
  const {
    display,
    setDisplay,
    currentString,
    setCurrentString,
    setCurrentOperator,
    lastEnteredDigit,
    setLastEnteredDigit,
  } = useContext(DisplayContext);

  const handleClick = (text, value, type) => {
    console.log(text, value, type);

    if (type === "clear") {
      setDisplay(0);
      setCurrentString(``);
      setCurrentOperator(``);
      setLastEnteredDigit(``);
    } else if (lastEnteredDigit === "operator" && type === "operator") {
      const newString = currentString.slice(0, -1) + value;
      setCurrentString(newString);
      setDisplay(newString);
      setCurrentOperator(value);
      setLastEnteredDigit(type);
    } else if (value === 0 && display === 0) {
      setCurrentString(value);
      setDisplay(value);
      setLastEnteredDigit(type);
    } else if (type === "number") {
      setCurrentString(currentString + value);
      setDisplay(currentString + value);
      setLastEnteredDigit(type);
    } else if (type === "operator" && display === 0) {
      setDisplay(0);
      setCurrentOperator(value);
      setLastEnteredDigit(type);
    } else if (type === "operator") {
      setCurrentString(currentString + value);
      setDisplay(currentString + value);
      setLastEnteredDigit(type);
    } else if (type === "equals" && display === 0) {
      setDisplay(0);
      setLastEnteredDigit(type);
    } else if (type === "equals") {
      const total = eval(currentString);
      setDisplay(total);
      setLastEnteredDigit(type);
    } else if (type === "decimal" && display === 0) {
      setCurrentString(0 + currentString + value);
      setDisplay(0 + currentString + value);
      setLastEnteredDigit(type);
    }
  };

  return (
    <StyledButton
      color={color}
      gridArea={gridArea}
      onClick={() => handleClick(text, value, type)}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
