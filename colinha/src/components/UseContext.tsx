import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme deve estar dentro de ThemeProvider");
  return context;
}

function BotaoTema() {
    const { theme, toggleTheme } = useTheme();
  
    return <button onClick={toggleTheme}>Tema atual: {theme}</button>;
  }
export default BotaoTema;  