import React from 'react';
import { render } from 'test-utils';

import { mockedImage } from './__mocks__/mockData';
import { FeaturedImage } from '.';

describe('<FeaturedImage />', () => {
  it('does not render anything if not receives image', () => {
    const { queryByTestId } = render(<FeaturedImage />);
    expect(queryByTestId('featured-image-wrapper')).not.toBeInTheDocument();
  });

  it('renders gatsby image with default alt', () => {
    const { container } = render(<FeaturedImage image={mockedImage} />);

    const imgEl = container.querySelector('img[alt="Featured image"]');

    expect(imgEl).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders gatsby image with custom alt', () => {
    const imgCaption = 'This is an awesome image';

    const { container } = render(
      <FeaturedImage image={mockedImage} imageCaption={imgCaption} />,
    );

    const imgEl = container.querySelector(`img[alt="${imgCaption}"]`);

    expect(imgEl).toBeInTheDocument();
  });

  it('does not render imageCaption element when not receive "imageCaption"', () => {
    const { queryByTestId } = render(<FeaturedImage image={mockedImage} />);

    const captionEl = queryByTestId('featured-img-caption');

    expect(captionEl).not.toBeInTheDocument();
  });

  it('renders img-caption element when send imageCaption', () => {
    const imgCaption = 'This is an awesome image';

    const { getByTestId } = render(
      <FeaturedImage image={mockedImage} imageCaption={imgCaption} />,
    );

    const captionEl = getByTestId('featured-img-caption');

    expect(captionEl).toBeInTheDocument();
    expect(captionEl).toHaveTextContent(imgCaption);
  });
});
