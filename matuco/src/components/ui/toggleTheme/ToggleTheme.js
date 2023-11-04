import React, { useContext } from "react";
import "./toggleTheme.css";
import { ThemeContext } from "../../../services/themeContext/Theme.context";

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
