import { FormattedMessage } from "gatsby-plugin-intl";
import React from "react";
import styled from "styled-components";

import routes from "../../routes";
import { StyledLink, StyledList } from "../Styled";
import ThemeToggler from "../Toggler/ThemeToggler";
import LangNav from "./LangNav";

const StyledNav = styled.nav`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  width: 100%;

  @media screen and (min-width: 600px) {
    align-items: center;
  }
`;

const StyledMainList = styled(StyledList)`
  align-items: flex-start;
  flex-direction: column;
  flex: 1;

  li {
    line-height: 1.5rem;
    margin-right: 3rem;
  }

  @media screen and (min-width: 600px) {
    align-items: center;
    flex-direction: row;
  }
`;

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledMainList>
        {routes.map((route, index) => (
          <li key={index}>
            <StyledLink to={route.path} activeClassName="active">
              <FormattedMessage id={route.title} />
            </StyledLink>
          </li>
        ))}
        <li>
          <LangNav text="TW" lang="zh-TW" />
          /
          <LangNav text="EN" lang="en" />
        </li>
      </StyledMainList>
      <StyledList>
        <li>
          <ThemeToggler />
        </li>
      </StyledList>
    </StyledNav>
  );
};

export default Nav;
