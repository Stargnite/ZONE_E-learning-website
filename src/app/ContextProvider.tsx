"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

interface DarkModeContextData {
 isDarkMode: boolean;
 toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextData | undefined>(undefined);

interface DarkModeProviderProps {
   children: ReactNode;
 }

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
 const [isDarkMode, setIsDarkMode] = useState(false);

 const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
 };

 return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
 );
};

export const useDarkMode = () => {
 const context = useContext(DarkModeContext);

 if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
 }

 return context;
};