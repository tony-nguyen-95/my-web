import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Title() {
  const { selectedTheme } = useSelector((state) => state.ThemeReducer);

  return (
    <TitleStyled style={{ color: selectedTheme.secondaryColor }}>
      Full-stack Developer
    </TitleStyled>
  );
}

const TitleStyled = styled.h3`
  text-align: center;
  font-weight: 100;
  @media (max-width: 800px) {
    font-size: 11px;
  }
`;
