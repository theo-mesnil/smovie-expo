import React, { createContext, useContext } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider({ children, value }) {
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
