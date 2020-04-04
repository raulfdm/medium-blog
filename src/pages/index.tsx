import React from 'react';
import styled from 'styled-components';
import { defineMessages } from 'react-intl';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { GraphQLResponse } from '../types';
import AuthorPresentation from '../components/AuthorPresentation';
import { getAndSanitizePostsFromQueryResponse } from '../components/Home/helpers/posts';
import { useIntl } from '../context/react-intl';
import SEO from '../components/SEO';
import { Filter } from '../components/Home/Filter';
import { PostFilters } from '../components/Home/types';
import { Posts } from '../components/Home/Posts';
import { normalizeWpResponse } from '../utils';

const StyledAuthorPresentation = styled(AuthorPresentation)`
  margin-bottom: 3rem;
`;

const messages = defineMessages({
  description: {
    id: 'siteData.description',
  },
  title: {
    id: 'siteData.title',
  },
});

const Home: React.FC<GraphQLResponse> = ({ data }) => {
  const wpPosts = normalizeWpResponse(data.allWordpressPost);

  const { locale, formatMessage } = useIntl();
  const [filter, setFilter] = React.useState<PostFilters>('all');

  const posts = getAndSanitizePostsFromQueryResponse({
    data,
    preferredLang: locale,
  });

  if (!data.site) {
    throw new Error('Home: site info is empty');
  }

  const { profilePic, social, author } = data.site.siteMetadata;

  return (
    <>
      <SEO
        url="/"
        lang={locale}
        description={formatMessage(messages.description)}
        title={formatMessage(messages.title)}
      />
      <Layout>
        <main>
          <StyledAuthorPresentation
            name={author}
            profilePic={profilePic}
            twitter={social.twitter}
            linkedIn={social.linkedIn}
            github={social.github}
          />
          <Filter setFilter={setFilter} currentFilter={filter} />
          <Posts posts={wpPosts.concat(posts)} filter={filter} />
        </main>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            series {
              id
            }
            title
            subtitle
            date
            categories
            description
            image {
              childImageSharp {
                fluid(quality: 60, maxWidth: 700, fit: CONTAIN) {
                  base64
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
                  aspectRatio
                }
              }
            }
          }
          fileAbsolutePath
          fields {
            slug
            lang
            commonSlug
          }
        }
      }
    }
    site {
      siteMetadata {
        profilePic
        author
        social {
          github
          linkedIn
          twitter
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          id
          path
          title
          excerpt
          date
          featured_media {
            alt_text
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
    }
  }
`;

export default Home;
