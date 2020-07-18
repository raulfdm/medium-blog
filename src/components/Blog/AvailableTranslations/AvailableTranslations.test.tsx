import React from 'react';
import { mocked } from 'ts-jest/utils';

import { render, screen } from 'test-utils';

import { useBlogContext } from '../blogContext';
import { AvailableTranslations } from '.';

jest.mock('../blogContext');

const mockedUseBlogContext = mocked(useBlogContext);

describe('<AvailableTranslations />', () => {
  it('does not render anything if translations is null', () => {
    mockedUseBlogContext.mockReturnValue({ translations: null } as any);
    render(<AvailableTranslations />);

    expect(
      screen.queryByTestId('blog-available-translations'),
    ).not.toBeInTheDocument();
  });

  it('renders links for all available locales', () => {
    mockedUseBlogContext.mockReturnValue({
      translations: [
        { lang: 'pt', slug: '/post' },
        { lang: 'en', slug: '/en/post' },
      ],
    } as any);
    render(<AvailableTranslations />);

    const linkElements = screen.queryAllByTestId(
      'blog-available-translations-link',
    );

    expect(linkElements).toHaveLength(2);
    expect(linkElements).toMatchInlineSnapshot(`
      Array [
        @media (min-width:768px) {

      }

      <a
          data-testid="blog-available-translations-link"
          href="/post"
        >
          Portuguese
        </a>,
        @media (min-width:768px) {

      }

      <a
          data-testid="blog-available-translations-link"
          href="/en/post"
        >
          English
        </a>,
      ]
    `);
  });
});
