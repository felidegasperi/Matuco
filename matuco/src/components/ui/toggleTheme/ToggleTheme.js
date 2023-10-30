import React, { useContext } from "react";
import "./toggleTheme.css";
import { ThemeContext } from "../../../services/themeContext/Theme.context";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <div class="toggle-switch">
      <label class="switch-label">
        <input type="checkbox" class="checkbox" onClick={handleToggleTheme} />
        <span class="slider"></span>
      </label>
    </div>
  );
};

export default ToggleTheme;
