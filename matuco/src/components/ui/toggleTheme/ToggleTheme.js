import React, { useContext } from "react";
import { ThemeContext } from "../../../services/themeContext/Theme.context";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <button onClick={handleToggleTheme}>
      Cambiar a tema {theme === "LIGHT" ? "oscuro" : "claro"}
    </button>
  );
};

export default ToggleTheme;
