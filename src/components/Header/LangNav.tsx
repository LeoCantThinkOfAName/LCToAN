import React from "react";
import { changeLocale } from "gatsby-plugin-intl";

interface LangNavProp {
  text: string;
  lang: string;
}

const LangNav: React.FC<LangNavProp> = ({ text, lang }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    changeLocale(lang);
  };

  return (
    <a href="/" onClick={handleClick}>
      {text}
    </a>
  );
};

export default LangNav;
