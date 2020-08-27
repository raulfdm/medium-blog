import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { BlogThemeProvider } from '@screens/Blog/styles/themeProvider';
import { BigQuote } from './BigQuote';

export default {
  title: 'Blog/BigQuote',
  component: BigQuote,
  decorators: [
    (Story) => (
      <BlogThemeProvider>
        <Story />
      </BlogThemeProvider>
    ),
  ],
} as Meta;

export const defaultCase = () => (
  <BigQuote>"Some impactful message right here"</BigQuote>
);
