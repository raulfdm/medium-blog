import React from 'react';
import { useStaticQuery } from 'gatsby';

import { render, fireEvent } from 'test-utils';
import AuthorPresentation from './AuthorPresentation';

jest.mock('gatsby');

// describe.skip('<AuthorPresentation', () => {
//   const apiResponse = {
//     site: {
//       siteMetadata: {
//         profilePic:
//           'https://miro.medium.com/fit/c/256/256/1*6jtMoNvX_MHslzBLP4aM9g.jpeg',
//         author: 'Raul Melo',
//         social: {
//           github: 'https://github.com/raulfdm',
//           linkedIn: 'https://www.linkedin.com/in/raulfdm/',
//           twitter: 'https://twitter.com/raul_fdm',
//         },
//       },
//     },
//   };

//   (useStaticQuery as jest.Mock<typeof useStaticQuery>).mockReturnValue(
//     apiResponse as any,
//   );

//   const { getByTestId, debug } = render(<AuthorPresentation />);

//   it('renders author', () => {
//     expect(getByTestId('author').textContent).toBe(
//       apiResponse.site.siteMetadata.author,
//     );
//   });

//   it.skip('renders site description from locale', () => {
//     // expect(getByTestId('description').textContent).toMatchInlineSnapshot();
//     // expect(debug()).toBe(1);
//   });
// });

it('test', () => {
  const CustomInput = () => {
    const [name, setName] = React.useState('');

    return (
      <>
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          value={name}
          data-testid="greetings"
        />
        <p data-testid="greetings">Hello {name}</p>
      </>
    );
  };

  const { getByTestId, container } = render(<CustomInput />);

  const input = getByTestId('name');
  const greetingsText = getByTestId('greetings');

  fireEvent.change(input, { target: { value: 'John' } });

  expect(greetingsText.textContent).toBe('Hello John');
});
