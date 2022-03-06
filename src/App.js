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
import About from "./components/About";

import { useSelector } from "react-redux";

function App() {
  const { tabChosen } = useSelector((state) => state.TabsReducer);

  return (
    <Fragment>
      <Background />

      <HeaderContent>
        <TextLogo />
        <Title />
        <Nav />
        {tabChosen === "Home" ? (
          <>
            <Sociaties />
            <FooterContent>
              <SwitchButton></SwitchButton>
            </FooterContent>
          </>
        ) : tabChosen === "About" ? (
          <About />
        ) : (
          <>
            <Sociaties />
            <FooterContent>
              <SwitchButton></SwitchButton>
            </FooterContent>
          </>
        )}

        {/* <About /> */}
        {/* <TabsPage /> */}
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
  position: fixed;
  top: 77vh !important;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
`;

// const AboutContent = styled.div`
//   position: relative;
//   top: 11vh;
//   @media (max-width: 800px) {
//     font-size: 8px;
//     /* top: 50vh; */
//   }
// `;
export default App;
