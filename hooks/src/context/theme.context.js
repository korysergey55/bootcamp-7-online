import { createContext, useState } from "react";

const InitialThemeContext = {
  theme: "light",
  setTheme: () => null,
};

export const ThemeContext = createContext(InitialThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
