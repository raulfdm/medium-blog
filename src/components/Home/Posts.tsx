import React from 'react';
import { FormattedMessage } from 'react-intl';
import { motion, AnimatePresence } from 'framer-motion';

import { InfiniteScroll } from 'components/InfiniteScroll';
import { styled } from 'styles/emotion';
import { PostEdge, PostEdges } from 'types';
import { PostCard } from 'components/PostCard';
import { PostFilters } from './types';

type PostsProps = {
  filter: PostFilters;
  posts: PostEdges;
  loadMore: () => void;
  hasMore: boolean;
  customTitle?: string;
};

const PostsTitle = styled(motion.h2)`
  letter-spacing: -0.32px;
  font-size: 2.1rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.contentSans};
  padding-bottom: 1.2rem;
`;

const PostList = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-flow: dense;
`;

const PostItem = styled(motion.li)`
  max-width: 400px;
  &::nth-child(2n) {
    margin-left: 20px;
  }
`;

export const Posts: React.FC<PostsProps> = ({
  filter,
  posts,
  loadMore,
  hasMore,
  customTitle,
}) => {
  if (!posts) return null;

  const filterLocale = {
    all: 'home.filter.all',
    series: 'home.filter.series',
    single: 'home.filter.single',
  };

  const itemsAnimationVariants = {
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.1,
      },
    }),
    hidden: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <>
      <PostsTitle initial={{ scale: 0 }} animate={{ scale: 1 }}>
        {customTitle || <FormattedMessage id={filterLocale[filter]} />}
      </PostsTitle>

      <InfiniteScroll
        threshold={500}
        onLoadMore={loadMore}
        hasMore={hasMore}
        Component={PostList}
      >
        <AnimatePresence initial={false}>
          {posts.map(({ node }: PostEdge, index) => (
            <PostItem
              key={node.id}
              custom={index}
              variants={itemsAnimationVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                opacity: {
                  stiffness: 1000,
                  velocity: -100,
                },
              }}
            >
              <PostCard postNode={node} />
            </PostItem>
          ))}
        </AnimatePresence>
      </InfiniteScroll>
    </>
  );
};
