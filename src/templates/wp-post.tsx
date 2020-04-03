import React from 'react';
import { graphql } from 'gatsby';
import PostContentWrapper from './post-content-wrapper';
import { WordpressPost } from './../types';

type WpPostTypes = {
  data: {
    wordpressPost: WordpressPost;
  };
};

const WpPost: React.FC<WpPostTypes> = (props) => {
  const { title, excerpt, content } = props.data.wordpressPost;
  const image = props.data.wordpressPost.featured_media.localFile;
  return (
    <PostContentWrapper
      lang="pt-br"
      title={title}
      image={image}
      image_caption={''}
      subtitle={''}
      url={''}
      excerpt={excerpt}
      description={''}
    >
      <div
        data-testid="article-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </PostContentWrapper>
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
