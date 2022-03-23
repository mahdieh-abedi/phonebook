import React,{useEffect, useState, createContext } from "react";

export const ThemeContext = createContext({ theme:{}, setTheme: () => {} });

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
