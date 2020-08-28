import React, { createContext, useState } from 'react';

import { StyledThemeProvider, SiteTheme } from '@styles/styled';
import { theme } from '@styles/theme';
import { themeBackgroundColor } from '@styles/globals';

type ThemeProps = {
  children: React.ReactNode;
  initialTheme?: 'dark' | 'light';
};

type ContextType = {
  toggleTheme: () => void;
  theme: SiteTheme;
  currentTheme: string;
  isDarkTheme: boolean;
};

type ThemeKeys = keyof typeof ThemesAvailable;
export const ThemeContext = createContext<Partial<ContextType>>({});

export const ThemeProvider: React.FC<ThemeProps> = ({
  children,
  initialTheme,
}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeKeys>(
    initialTheme || 'light',
  );

  const isDarkTheme = currentTheme === 'dark';

  React.useEffect(() => {
    setCurrentTheme(window.__theme);
    setMetaTheme(window.__theme);
    window.__onThemeChange = () => setCurrentTheme(window.__theme);
  }, []);

  React.useEffect(() => {
    toggleTheme(initialTheme);
  }, [initialTheme]);

  function setMetaTheme(theme: ThemeKeys): void {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', themeBackgroundColor[theme]);
  }

  function toggleTheme(nTheme?: 'dark' | 'light'): void {
    const nextTheme = nTheme || currentTheme === 'dark' ? 'light' : 'dark';

    setMetaTheme(nextTheme);
    window.__setPreferredTheme(nextTheme);
  }

  const enhancedTheme = { ...(theme as SiteTheme), isDarkTheme };

  return (
    <StyledThemeProvider theme={enhancedTheme}>
      <ThemeContext.Provider
        value={{
          toggleTheme,
          theme: enhancedTheme,
          currentTheme,
          isDarkTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
