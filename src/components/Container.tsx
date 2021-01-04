import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 1rem 2rem;
  justify-content: center;
  margin: 0 auto;
  max-width: 1440px;
`;

const Container: React.FC = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default Container;
