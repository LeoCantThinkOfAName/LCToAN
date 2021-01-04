import styled from "styled-components";

const StyledIcon = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  margin-right: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

export default StyledIcon;
