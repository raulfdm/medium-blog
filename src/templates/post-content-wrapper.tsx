import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import media from 'styled-media-query';
import { motion } from 'framer-motion';
import { defineMessages } from 'react-intl';

import { pageTransitionVariants } from '../components/Ui';
import { BlogGlobalStyle } from '../styles/blogPost';
import { GlobalStyles } from '../styles';
import { Container } from '../components/Ui';
import { MenuBar } from '../components/MenuBar';
import SEO from '../components/SEO';
import { useIntl } from '../context/react-intl';
import { ThemeProvider } from '../config/theme';

const Title = styled.h1`
  font-size: 34px;
  line-height: 40px;

  ${media.greaterThan('medium')`
    font-size: 42px;
  `}
`;

const Subtitle = styled.p`
  font-size: 24px;
  line-height: 1.22;
  letter-spacing: -0.012em;
  font-family: ${({ theme }) => theme.font.contentSans};
  opacity: 0.54;

  ${media.greaterThan('medium')`
    font-size: 28px;
  `}
`;

const StyledImg = styled(Img)`
  max-height: 600px;
  margin-top: 42px;
`;

const ImgWrapper = styled(Container)`
  max-width: 1192px;
  padding-bottom: 50px;
`;

type PostProps = {
  title: string;
  image: any;
  image_caption: string;
  subtitle: string;
  url: string;
  excerpt: string;
  description: string;
};

const messages = defineMessages({
  featuredImageLabel: {
    id: 'blog.featuredImage',
  },
});

const PostContentWrapper: React.FC<PostProps> = ({
  title,
  image,
  image_caption: imageCaption,
  subtitle,
  url,
  description,
  excerpt,
  children,
}) => {
  const { formatMessage } = useIntl();
  React.useEffect(() => {
    /* This loads all widgets from twitter if exists. 
    It's loaded by html.tsx (data-testid="twitter-script")
    */
    // @ts-ignore
    if (window.twttr?.widgets) {
      // @ts-ignore
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <>
      <SEO
        title={title}
        description={description || excerpt!}
        lang="pt-br"
        url={url}
        image={image}
      />
      <ThemeProvider>
        <motion.div
          initial="exit"
          animate="enter"
          exit="exit"
          variants={pageTransitionVariants}
        >
          <GlobalStyles />
          <BlogGlobalStyle />
          <MenuBar />
          <Container as="header">
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </Container>
          {/* <SeriesSection noDivider /> */}
          {image && (
            <ImgWrapper
              role="img"
              aria-label={formatMessage(messages.featuredImageLabel)}
            >
              <StyledImg fluid={image} alt={imageCaption} />
              {imageCaption && <p className="img-caption">{imageCaption}</p>}
            </ImgWrapper>
          )}
          <Container className="post" as="main">
            {children}
          </Container>
          <br />
        </motion.div>
      </ThemeProvider>
    </>
  );
};

export default PostContentWrapper;
