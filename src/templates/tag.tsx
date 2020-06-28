import React from 'react';
import { defineMessages } from 'react-intl';

import { useHomeState } from 'components/Home/useHomeState';
import SEO from '../components/SEO';
import { useIntl } from '../context/react-intl';
import { getAndSanitizePostsFromQueryResponse } from '../components/Home/helpers/posts';
import AuthorPresentation from '../components/AuthorPresentation';
import Layout from '../components/Layout';
import { Posts } from '../components/Home/Posts';
import { PostEdges } from '../types';

type TagTemplateProps = {
  pageContext: {
    postEdges: PostEdges;
    tag: string;
  };
  uri: string;
};

const messages = defineMessages({
  description: {
    id: 'siteData.description',
  },
  title: {
    id: 'siteData.title',
  },
  postsTitle: {
    id: 'tag.title',
  },
});

const TagTemplate: React.FC<TagTemplateProps> = ({ pageContext, uri }) => {
  const { postEdges, tag } = pageContext;

  const { hasMore, loadMore, postsToRender, filter } = useHomeState(postEdges);

  const { locale, formatMessage } = useIntl();

  const posts = getAndSanitizePostsFromQueryResponse({
    postEdges: postsToRender,
    preferredLang: locale,
  });

  return (
    <>
      <SEO
        url={uri}
        lang={locale}
        description={formatMessage(messages.description)}
        title={formatMessage(messages.title)}
      />

      <Layout>
        <main>
          <AuthorPresentation />
          <Posts
            customTitle={formatMessage(messages.postsTitle, { tag: tag })}
            posts={posts}
            filter={filter}
            loadMore={loadMore}
            hasMore={hasMore}
          />
        </main>
      </Layout>
    </>
  );
};

export default TagTemplate;
