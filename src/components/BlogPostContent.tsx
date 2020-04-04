import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import media from 'styled-media-query';
import { motion } from 'framer-motion';
import { defineMessages } from 'react-intl';
import { pageTransitionVariants, Container } from './Ui';
import { BlogGlobalStyle } from '../styles/blogPost';
import { GlobalStyles } from '../styles';
import { MenuBar } from './MenuBar';
import SEO from './SEO';
import { useIntl } from '../context/react-intl';
import { ThemeProvider } from '../config/theme';
import { PostTemplate } from './../types';
import SeriesSection from './Blog/SeriesSection/SeriesSection';
import { useScripts } from '../hooks';

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

const messages = defineMessages({
  featuredImageLabel: {
    id: 'blog.featuredImage',
  },
});

const BlogPostContent: React.FC<PostTemplate> = ({
  title,
  image,
  image_caption: imageCaption,
  subtitle,
  url,
  description,
  excerpt,
  lang,
  seriesInfo,
  series,
  children,
}) => {
  /* This component is responsable to handle with any blog post, whether by markup ou CMS, receivig all the necessary information, such as image, title, series, beside url, lang and description to SEO setup. Its content is rendered as a children component. It's easier to add any new features like share buttons, comment box.
   */

  const { formatMessage } = useIntl();
  useScripts();

  return (
    <>
      <SEO
        title={title}
        description={description || excerpt!}
        lang={lang}
        url={url}
        image={image?.childImageSharp?.fluid?.src}
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
            <SeriesSection
              seriesInfo={seriesInfo}
              title={title}
              series={series}
              noDivider
            />
          </Container>
          {image && (
            <ImgWrapper
              role="img"
              aria-label={formatMessage(messages.featuredImageLabel)}
            >
              <StyledImg
                fluid={image.childImageSharp.fluid}
                alt={imageCaption}
              />
              {imageCaption && <p className="img-caption">{imageCaption}</p>}
            </ImgWrapper>
          )}
          <Container className="post" as="main">
            {children}
            <SeriesSection
              seriesInfo={seriesInfo}
              title={title}
              series={series}
            />
          </Container>
          <br />
        </motion.div>
      </ThemeProvider>
    </>
  );
};

export default BlogPostContent;
