import { ButtonGroup, Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Nav() {
  const { selectedTheme } = useSelector((state) => state.ThemeReducer);

  const ButtonNoRadius = styled(Button)`
    color: ${selectedTheme.secondaryColor} !important;
    border: 0.8px solid ${selectedTheme.buttonColor} !important;
    border-radius: 0px !important;
    width: 14vw;
    @media (max-width: 800px) {
      width: 23vw;
    }
    @media (max-width: 300px) {
      font-size: 10px !important;
    }
  `;

  return (
    <ButtonGroupStyled>
      <ButtonNoRadius leftButton>Home</ButtonNoRadius>
      <ButtonNoRadius>About</ButtonNoRadius>
      <ButtonNoRadius>Contact</ButtonNoRadius>
    </ButtonGroupStyled>
  );
}

const ButtonGroupStyled = styled(ButtonGroup)`
  position: relative;
  top: 7vh;
  @media (max-width: 800px) {
    top: 5vh;
  }
`;
