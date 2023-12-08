"use client";
import { useState, useContext, createContext } from 'react';

const themeContext = createContext<{
  theme: "light" | "dark" | "emoji" | "colored";
  patpat: boolean;
  setTheme: (theme: "light" | "dark" | "emoji" | "colored") => void;
  setPatpat: (patpat: boolean) => void;
}>({
  theme: "light",
  patpat: false,
  setTheme: () => { },
  setPatpat: () => { },
});

export function useTheme() {
  return useContext(themeContext);
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark" | "emoji" | "colored">("light");
  const [patpat, setPatpat] = useState<boolean>(false);


  return (
    <themeContext.Provider
      value={{
        theme,
        patpat,
        setTheme,
        setPatpat,
      }}
    >
      {children}
    </themeContext.Provider>
  );
}