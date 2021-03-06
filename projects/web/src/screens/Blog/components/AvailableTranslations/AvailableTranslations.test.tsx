import React from 'react';

import { render, screen } from '@utils/test';
import { AvailableTranslations } from '.';

jest.mock('@screens/Blog/context');
jest.mock('@screens/Blog/hooks/useBlogContext');

describe('<AvailableTranslations />', () => {
  it('does not render anything if translation is undefined', () => {
    render(<AvailableTranslations translation={undefined} />);

    expect(
      screen.queryByTestId('blog-available-translations'),
    ).not.toBeInTheDocument();
  });

  it('does not render anything if translation is empty object', () => {
    render(<AvailableTranslations translation={{} as any} />);

    expect(
      screen.queryByTestId('blog-available-translations'),
    ).not.toBeInTheDocument();
  });

  it('does not render anything if translation is null', () => {
    render(<AvailableTranslations translation={null} />);

    expect(
      screen.queryByTestId('blog-available-translations'),
    ).not.toBeInTheDocument();
  });

  it('renders link for the translation', () => {
    render(
      <AvailableTranslations
        translation={{ language: 'pt', postUri: '/post' }}
      />,
    );

    const linkEl = screen.queryByTestId('blog-available-translations-link');

    expect(linkEl).toBeInTheDocument();
    expect(linkEl).toMatchInlineSnapshot(`
      @media (min-width:768px) {

      }

      <a
        data-testid="blog-available-translations-link"
        href="/post"
      >
        Portuguese
      </a>
    `);
  });
});
