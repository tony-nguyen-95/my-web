import { ButtonGroup } from "@material-ui/core";
import React from "react";
import NavButton from "./NavButton";
import styled from "styled-components";

const arrayTabs = ["Home", "About", "Contact"];
const ButtonGroupStyled = styled(ButtonGroup)`
  position: relative;
  top: 7vh;
  @media (max-width: 800px) {
    top: 8vh;
  }
`;
export default function Nav() {
  const renderTabs = () => {
    return arrayTabs.map((item, index) => {
      return <NavButton tabName={item} key={index} />;
    });
  };

  return (
    <ButtonGroupStyled>
      {/* <ButtonNoRadius
        onClick={() => {
          changeTab("home");
        }}
      >
        Home
      </ButtonNoRadius>
      <ButtonNoRadius value={"about"}>About</ButtonNoRadius>
      <ButtonNoRadius value={"contact"}>Contact</ButtonNoRadius> */}
      {/* <NavButton /> */}
      {renderTabs()}
    </ButtonGroupStyled>
  );
}
