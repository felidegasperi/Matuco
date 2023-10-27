import React, { useContext } from "react";
import { ThemeContext } from "../../services/themeContext/theme.context";

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <div>
        <button onClick={handleToggleTheme}>

        </button>
    </div>
  );
};

export default ToggleTheme;
