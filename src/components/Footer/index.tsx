import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  font-size: 0.8rem;
  padding: 2rem 0;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>&copy; {new Date().getFullYear()}, LCTOAN.</StyledFooter>
  );
};

export default Footer;
