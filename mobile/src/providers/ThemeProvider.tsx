import React, { createContext, useContext, ReactNode } from 'react';
import { Appearance } from 'react-native';

import { LightTheme } from '../theme/lightTheme';
import { DarkTheme } from '../theme/darkTheme';

type ThemeType = typeof LightTheme;

const ThemeContext = createContext<ThemeType>(LightTheme);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === 'dark'
    ? DarkTheme
    : LightTheme;

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}