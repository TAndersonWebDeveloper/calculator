import { styled } from "styled-components";
import { buttonInfo } from "../util/buttonInfo";
import Button from "./Button";
import { useContext } from "react";
import { DisplayContext } from "../App";

const CalculatorLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "display display display display"
    "clear clear divide multiply"
    "seven eight nine subtract"
    "four five six add"
    "one two three equals"
    "zero zero decimal equals";
  border: 3px solid black;
`;

const Display = styled.div`
  width: 100%;
  height: 100px;
  background-color: #000;
  color: #fff;
  grid-area: display;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  letter-spacing: 1px;
`;

const Layout = () => {
  const { display } = useContext(DisplayContext);
  return (
    <CalculatorLayout>
      <Display>{display}</Display>
      {buttonInfo.map((button) => {
        return (
          <Button
            key={button.id}
            value={button.value}
            text={button.text}
            gridArea={button.gridArea}
            color={button.color}
            type={button.type}
          />
        );
      })}
    </CalculatorLayout>
  );
};

export default Layout;
