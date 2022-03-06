import { IconButton } from "@material-ui/core";
import { FaFacebook, FaGithub, FaLinkedin, FaRss } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Sociaties() {
  const { selectedTheme } = useSelector((state) => state.ThemeReducer);

  const ScaleButton = styled(IconButton)`
    color: ${selectedTheme.buttonColor} !important;
    font-size: 2.2rem !important;
    margin: 1vh 1vw !important;
    @media (max-width: 800px) {
      font-size: 2rem !important;
      margin: 2vh 1vw !important;
    }
    @media (max-width: 420px) {
      font-size: 1.6rem !important;
      margin: 0.5vh 1vw !important;
    }
  `;

  return (
    <IconGroup>
      <ScaleButton>
        <a
          style={{ color: "inherit", height: "2rem" }}
          href="https://www.facebook.com/nguyenquoc.huy.545"
          target="_blank"
        >
          <FaFacebook></FaFacebook>
        </a>
      </ScaleButton>
      <ScaleButton>
        <a
          style={{ color: "inherit", height: "2rem" }}
          href="https://github.com/huy6495"
          target="_blank"
        >
          <FaGithub></FaGithub>
        </a>
      </ScaleButton>
      <ScaleButton>
        <a
          style={{ color: "inherit", height: "2rem" }}
          href="https://www.linkedin.com/in/huy-nguyen-688671156/"
          target="_blank"
        >
          <FaLinkedin></FaLinkedin>
        </a>
      </ScaleButton>

      {/* <ScaleButton>
        <FaRss></FaRss>
      </ScaleButton> */}
    </IconGroup>
  );
}

const IconGroup = styled.div`
  position: relative;
  top: 15vh;
`;
