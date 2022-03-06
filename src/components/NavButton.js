import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

export default function NavButton(props) {
  const { tabName } = props;
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
    @media (max-width: 400px) {
      font-size: 14px !important;
    }
  `;
  const dispatch = useDispatch();
  const changeTab = (value) => {
    let typeTab = value.toUpperCase() + "_TAB";

    dispatch({ type: typeTab });
  };
  return (
    <ButtonNoRadius onClick={() => changeTab(tabName)}>
      {tabName}
    </ButtonNoRadius>
  );
}
