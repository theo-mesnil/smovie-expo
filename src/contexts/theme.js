import React, { createContext, useContext } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children, value }) {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
