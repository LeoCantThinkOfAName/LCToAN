import styled from "styled-components";

export const StyledList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: flex;
  }
  a {
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      font-weight: 600;
    }
  }
  .active {
    text-decoration: underline;
    font-weight: 600;
  }
`;
