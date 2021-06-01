import styled, { keyframes } from "styled-components";
import React from "react";
import { useSelector } from "react-redux";

const text = keyframes`
from {
    stroke-dashoffset: 700px;
  }
  to {
    stroke-dashoffset: 350px;
  }
`;
const TextLogoStyled = styled.div`
  path {
    animation: ${text} 4.5s 1s linear infinite;
  }
`;

export default function TextLogo() {
  const { selectedTheme } = useSelector((state) => state.ThemeReducer);

  return (
    <TextLogoStyled>
      <svg
        viewBox="0 0 1945 380"
        width="35vw"
        strokeWidth={1.35}
        fill="none"
        stroke={selectedTheme.secondaryColor}
        strokeLinecap="round"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeDasharray="700"
          transform="translate(100,300)"
          d="M6.0 0.5C6.0 0.5 6.0 -173.5 6.0 -173.5M146.0 0.5C146.0 0.5 146.0 -173.5 146.0 -173.5M146.0 -86.5C146.0 -86.5 6.0 -86.5 6.0 -86.5"
        />
        <path
          vectorEffect="non-scaling-stroke"
          transform="translate(283,300)"
          strokeDasharray="700"
          d="M6.0 -176.5C6.0 -176.5 6.0 -65.0 6.0 -65.0C6.0 -29.0 41.0 0.0 79.0 0.0C117.0 0.0 152.0 -29.0 152.0 -65.0C152.0 -65.0 152.0 -176.5 152.0 -176.5"
        />
        <path
          vectorEffect="non-scaling-stroke"
          transform="translate(472,300)"
          strokeDasharray="700"
          d="M9.0 -174.5C9.0 -174.5 90.0 -64.0 90.0 -64.0M171.0 -174.5C171.0 -174.5 90.0 -64.0 90.0 -64.0M90.0 0.0C90.0 0.0 90.0 -64.0 90.0 -64.0"
        />
        <path
          vectorEffect="non-scaling-stroke"
          transform="translate(782,300)"
          strokeDasharray="700"
          d="M6.0 0.5C6.0 0.5 6.0 -173.5 6.0 -173.5C6.0 -173.5 153.0 0.5 153.0 0.5C153.0 0.5 153.0 -173.5 153.0 -173.5"
        />
        <path
          vectorEffect="non-scaling-stroke"
          transform="translate(972,300)"
          strokeDasharray="700"
          d="M93.0 -88.5C93.0 -88.5 159.0 -88.5 159.0 -88.5C159.0 -88.5 159.0 -24.5 159.0 -24.5C142.0 -9.5 121.0 0.5 97.0 0.5C47.0 0.5 6.0 -40.5 6.0 -90.5C6.0 -140.5 47.0 -180.5 97.0 -180.5C121.0 -180.5 143.0 -170.5 160.0 -155.5"
        />
        <path
          vectorEffect="non-scaling-stroke"
          transform="translate(1169,300)"
          strokeDasharray="700"
          d="M6.0 -176.5C6.0 -176.5 6.0 -65.0 6.0 -65.0C6.0 -29.0 41.0 0.0 79.0 0.0C117.0 0.0 152.0 -29.0 152.0 -65.0C152.0 -65.0 152.0 -176.5 152.0 -176.5"
        />
        <path
          vectorEffect="non-scaling-stroke"
          transform="translate(1358,300)"
          strokeDasharray="700"
          d="M9.0 -174.5C9.0 -174.5 90.0 -64.0 90.0 -64.0M171.0 -174.5C171.0 -174.5 90.0 -64.0 90.0 -64.0M90.0 0.0C90.0 0.0 90.0 -64.0 90.0 -64.0"
        />
        <path
          vectorEffect="non-scaling-stroke"
          transform="translate(1568,300)"
          strokeDasharray="700"
          d="M122.0 0.5C122.0 0.5 6.0 0.5 6.0 0.5C6.0 0.5 6.0 -173.5 6.0 -173.5C6.0 -173.5 122.0 -173.5 122.0 -173.5M6.0 -86.5C6.0 -86.5 105.0 -86.5 105.0 -86.5"
        />
        <path
          vectorEffect="non-scaling-stroke"
          transform="translate(1727,300)"
          strokeDasharray="700"
          d="M6.0 0.5C6.0 0.5 6.0 -173.5 6.0 -173.5C6.0 -173.5 153.0 0.5 153.0 0.5C153.0 0.5 153.0 -173.5 153.0 -173.5"
        />
      </svg>
    </TextLogoStyled>
  );
}
