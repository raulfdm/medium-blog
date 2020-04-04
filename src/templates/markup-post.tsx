import React from 'react';
import rehypeReact from 'rehype-react';
import { Quote } from '../components/Ui';
import { Gif } from '../components/Gif';
import { Frontmatter, SeriesType, PostSeries, PostEdge } from '../types';
import { YouTubeVideo } from '../components/YouTubeVideo';
import BlogPostContent from '../components/BlogPostContent';

type MarkupPostProps = {
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

const MarkupPost: React.FC<MarkupPostProps> = ({ pageContext }) => {
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

  return (
    <BlogPostContent
      series={series}
      title={title}
      seriesInfo={seriesInfo}
      image={image}
      image_caption={imageCaption}
      subtitle={subtitle}
      lang={fields?.lang!}
      url={fields?.slug!}
      description={description || excerpt!}
    >
      {renderAst(htmlAst)}
    </BlogPostContent>
  );
};

export default MarkupPost;
