import { createContext, useContext, useEffect, useState } from "react";

export type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark") != null
  );

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("dark");
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark", "dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw "ThemeProvider is not added to the root";
  }
  return context;
};

export default ThemeProvider;
