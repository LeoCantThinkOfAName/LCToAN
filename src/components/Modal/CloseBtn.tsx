import styled from "styled-components";

export const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  line-height: 2rem;
  height: 2rem;
  outline: none;
  padding: 0;
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2rem;
`;
