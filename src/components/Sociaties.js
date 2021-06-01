import { IconButton } from "@material-ui/core";
import { FaFacebook, FaGithub, FaLinkedin, FaRss } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Sociaties() {
  const { selectedTheme } = useSelector((state) => state.ThemeReducer);

  const ScaleButton = styled(IconButton)`
    color: ${selectedTheme.buttonColor} !important;
    font-size: 1.8rem !important;
    margin: 1vh 2.3vw !important;
    @media (max-width: 800px) {
      font-size: 1.4rem !important;
      margin: 1vh 1vw !important;
    }
  `;

  return (
    <IconGroup>
      <ScaleButton>
        <a
          style={{ color: "inherit", height: "1.8rem" }}
          href="https://www.facebook.com/nguyenquoc.huy.545"
          target="_blank"
        >
          <FaFacebook></FaFacebook>
        </a>
      </ScaleButton>
      <ScaleButton>
        <a
          style={{ color: "inherit", height: "1.8rem" }}
          href="https://github.com/huy6495"
          target="_blank"
        >
          <FaGithub></FaGithub>
        </a>
      </ScaleButton>
      <ScaleButton>
        <a
          style={{ color: "inherit", height: "1.8rem" }}
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
  top: 11vh;
`;
