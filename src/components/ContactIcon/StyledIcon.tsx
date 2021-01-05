import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const StyledIcon = styled(OutboundLink)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  margin-right: 1rem;

  &:hover {
    opacity: 0.8;
  }
`

export default StyledIcon
