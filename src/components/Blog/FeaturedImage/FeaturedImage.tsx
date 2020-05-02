import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { defineMessages } from 'react-intl';

import { Frontmatter } from 'types';
import { useIntl } from 'context/react-intl';
import { Container } from '../../Ui';

const StyledImg = styled(Img)`
  max-height: 600px;
  margin-top: 42px;
`;

const ImgWrapper = styled(Container)`
  max-width: 1192px;
  padding-bottom: 50px;
`;

interface FeaturedImageProps {
  image?: Frontmatter['image'];
  imageCaption?: Frontmatter['image_caption'];
}

const messages = defineMessages({
  featuredImageLabel: {
    id: 'blog.featuredImage',
  },
});

export const FeaturedImage = ({ image, imageCaption }: FeaturedImageProps) => {
  const { formatMessage } = useIntl();

  return image ? (
    <ImgWrapper
      role="img"
      aria-label={formatMessage(messages.featuredImageLabel)}
      data-testid="featured-image-wrapper"
    >
      <StyledImg
        fluid={image.childImageSharp.fluid}
        alt={imageCaption || formatMessage(messages.featuredImageLabel)}
        data-testid="featured-image"
      />
      {imageCaption && (
        <p className="img-caption" data-testid="featured-img-caption">
          {imageCaption}
        </p>
      )}
    </ImgWrapper>
  ) : null;
};
