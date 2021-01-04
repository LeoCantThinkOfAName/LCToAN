import { Link as RouterLink } from "gatsby-plugin-intl";
import styled from "styled-components";

export const StyledLink = styled(RouterLink)`
  color: ${({ theme }) => theme.colors.primary};
`;
