import React from 'react';
import { ThemeProvider } from '@contexts/theme';
import { BlogGlobalStyle } from '@styles/blogPost';
import { GlobalStyles } from '@styles/index';

export function BlogThemeProvider({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <BlogGlobalStyle />
      {children}
    </ThemeProvider>
  );
}
