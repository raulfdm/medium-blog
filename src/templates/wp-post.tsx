import React from 'react';
import { graphql } from 'gatsby';
import { WordpressPost } from './../types';
import BlogPostContent from '../components/BlogPostContent';

type WpPostProps = {
  data: {
    wordpressPost: WordpressPost;
  };
};

const WpPost: React.FC<WpPostProps> = (props) => {
  const {
    title,
    excerpt,
    content,
    path,
    alt_text: altText,
    featured_media: { localFile: image },
  } = props.data.wordpressPost;

  return (
    <BlogPostContent
      lang="pt-br"
      title={title}
      image={image}
      image_caption={altText}
      url={path}
      excerpt={excerpt}
    >
      <div
        data-testid="article-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </BlogPostContent>
  );
};

export default WpPost;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      content
      excerpt
      path
      date(formatString: "MM-DD-YYYY")
      featured_media {
        alt_text
        caption
        localFile {
          childImageSharp {
            fluid {
              tracedSVG
              srcWebp
              srcSetWebp
              srcSet
              src
              sizes
              presentationWidth
              presentationHeight
              originalName
              originalImg
              base64
              aspectRatio
            }
          }
        }
      }
    }
  }
`;
