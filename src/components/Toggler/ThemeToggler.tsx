import React, { useContext } from "react";

import Toggler from ".";
import { ModeContext } from "../../context/ThemeContext";
import themeRoulette from "../../utils/themeRoulette";
import { useIntl } from "gatsby-plugin-intl";

const ThemeToggler = () => {
  const {
    modes: { current, options },
    setMode
  } = useContext(ModeContext);
  const intl = useIntl();

  const handleChange = () => {
    const next = themeRoulette({ modes: options, mode: current });
    setMode({
      modes: {
        current: next,
        options: options
      }
    });
  };

  return (
    <Toggler
      id="theme-toggler"
      label="W / B"
      onChange={handleChange}
      checked={current !== "default"}
      title={intl.formatMessage({ id: "ToggleTheme" })}
    />
  );
};

export default ThemeToggler;
