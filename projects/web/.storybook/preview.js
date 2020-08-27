import React from 'react';
import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';

import { ThemeProvider } from '@contexts/theme';
import { GlobalStyles } from '@styles/index';
import { BlogGlobalStyle } from '@styles/blogPost';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

addDecorator((story, ctx) => {
  /* I only wants to import blog globalStyles if the component is
  part of Blog/ */
  const isBlog = ctx.kind.includes('Blog/');

  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        {isBlog && <BlogGlobalStyle />}
        {story()}
      </ThemeProvider>
    </>
  );
});
