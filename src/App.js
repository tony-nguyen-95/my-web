import "./App.css";
import Background from "./components/Background";
import TextLogo from "./components/TextLogo";
import Nav from "./components/Nav";
import { Fragment } from "react";
import styled from "styled-components";
import Title from "./components/Title";
import Sociaties from "./components/Sociaties";
import SwitchButton from "./components/SwitchButton";
import Copyright from "./components/Copyright";
import About from "./pages/About";

function App() {
  return (
    <Fragment>
      <Background />

      <HeaderContent>
        <TextLogo />
        <Title />
        <Nav />
        <Sociaties />
        {/* <AboutContent>
          <About />
        </AboutContent> */}
        <FooterContent>
          <SwitchButton></SwitchButton>
          <Copyright></Copyright>
        </FooterContent>
      </HeaderContent>
    </Fragment>
  );
}

const HeaderContent = styled.div`
  position: absolute;
  top: 18vh;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  @media (max-width: 800px) {
    top: 12vh;
  }
`;

const FooterContent = styled.div`
  position: relative;
  top: 16vh;
  /* left: 50%;
  transform: translateX(-50%); */
  text-align: center;
  @media (max-width: 800px) {
    top: 18vh;
  }
`;

const AboutContent = styled.div`
  position: relative;
  top: 11vh;
  @media (max-width: 800px) {
    font-size: 8px;
    /* top: 50vh; */
  }
`;
export default App;
