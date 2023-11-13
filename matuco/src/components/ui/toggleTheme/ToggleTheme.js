import React, { useContext } from "react";
import { ThemeContext } from "../../../services/themeContext/Theme.context";

import "./toggleTheme.css";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <label class="switch">
      <input type="checkbox" onClick={handleToggleTheme} />
      <span class="slider"></span>
    </label>
  );
};

export default ToggleTheme;
