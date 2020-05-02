import React from 'react';
import rehypeReact from 'rehype-react';
import { motion } from 'framer-motion';
import { defineMessages } from 'react-intl';

import { Quote, pageTransitionVariants } from '../components/Ui';
import { BlogGlobalStyle } from '../styles/blogPost';
import { GlobalStyles } from '../styles';
import { Container } from '../components/Ui';
import { MenuBar } from '../components/MenuBar';
import { SeriesMenu } from '../components/Blog/SeriesMenu';
import { Gif } from '../components/Blog/Gif';
import { Frontmatter, SeriesType, PostSeries, PostEdge } from '../types';
import SEO from '../components/SEO';

import { YouTubeVideo } from '../components/YouTubeVideo';
import { ThemeProvider } from '../context/theme';
import { Header } from 'components/Blog/Header';
import { FeaturedImage } from 'components/Blog/FeaturedImage';

type PostProps = {
  pageContext: {
    nextPost: PostSeries | null;
    post: PostEdge;
    series: SeriesType;
  };
};

/* Custom Components */
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'big-quote': Quote, gif: Gif, yt: YouTubeVideo },
}).Compiler;

const Post: React.FC<PostProps> = ({ pageContext }) => {
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
  const { series, post } = pageContext;

  const { htmlAst, frontmatter, excerpt, fields } = post.node;
  const {
    image,
    image_caption: imageCaption,
    title,
    subtitle,
    description,
    series: seriesInfo,
  } = frontmatter as Frontmatter;

  const SeriesSection: React.FC<{ noDivider?: boolean }> = ({
    noDivider = false,
  }) => {
    return (
      series && (
        <>
          {!noDivider && <hr />}
          <Container as="section">
            <SeriesMenu
              series={series}
              postIndex={seriesInfo!.index}
              title={title}
            />
          </Container>
        </>
      )
    );
  };

  return (
    <>
      <SEO
        title={title}
        description={description || excerpt!}
        lang={fields?.lang!}
        url={fields?.slug!}
        image={image?.publicURL}
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
          <Header title={title} subtitle={subtitle} />
          <SeriesSection noDivider />
          <FeaturedImage image={image} imageCaption={imageCaption} />
          <Container className="post" as="main">
            {renderAst(htmlAst)}
            <SeriesSection />
          </Container>
          <br />
        </motion.div>
      </ThemeProvider>
    </>
  );
};

export default Post;
