import React from "react";

import { ModeProvider } from "../context/ThemeContext";
import { GlobalStyle } from "../theme/global";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Signature from "./Signature";

const Layout: React.FC = ({ children }) => {
  return (
    <ModeProvider>
      <GlobalStyle />
      <Signature />
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </ModeProvider>
  );
};

export default Layout;
