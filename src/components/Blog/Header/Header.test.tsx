import React from 'react';
import { render } from 'test-utils';

import { Header } from '.';

describe('<Header />', () => {
  it('renders element', () => {
    const { getByTestId } = render(<Header title="hi" />);
    expect(getByTestId('header')).toBeInTheDocument();
  });

  it('renders title', () => {
    const title = 'some title';
    const { getByText } = render(<Header title={title} />);

    const titleEl = getByText(title);
    expect(titleEl).toBeInTheDocument();
    expect(titleEl).toMatchInlineSnapshot(`
      .c0 {
        font-size: 34px;
        line-height: 40px;
      }

      @media (min-width:768px) {

      }

      @media (min-width:768px) {
        .c0 {
          font-size: 42px;
        }
      }

      <h1
        class="c0"
        data-testid="header-title"
      >
        some title
      </h1>
    `);
  });

  it('does not render subtitle if not received ', () => {
    const { queryByTestId } = render(<Header title="hi" />);

    expect(queryByTestId('header-subtitle')).not.toBeInTheDocument();
  });

  it('renders subtitle', () => {
    const subtitle = 'some subtitle';
    const { queryByTestId } = render(<Header title="hi" subtitle={subtitle} />);

    const subtitleEl = queryByTestId('header-subtitle');

    expect(subtitleEl).toBeInTheDocument();
    expect(subtitleEl).toMatchInlineSnapshot(`
      .c0 {
        font-size: 24px;
        line-height: 1.22;
        -webkit-letter-spacing: -0.012em;
        -moz-letter-spacing: -0.012em;
        -ms-letter-spacing: -0.012em;
        letter-spacing: -0.012em;
        font-family: "content-sans-serif",-apple-system,BlinkMacSystemFont, 'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue', sans-serif;
        opacity: 0.54;
      }

      @media (min-width:768px) {

      }

      @media (min-width:768px) {

      }

      @media (min-width:768px) {
        .c0 {
          font-size: 28px;
        }
      }

      <p
        class="c0"
        data-testid="header-subtitle"
      >
        some subtitle
      </p>
    `);
  });
});
