import { WordpressPost, PostEdges } from './../types';

type normalizeWpResponseNode = {
  node: WordpressPost;
};

type normalizeWpResponseTypes = {
  edges: [normalizeWpResponseNode];
};

export const normalizeWpResponse = (
  data: normalizeWpResponseTypes,
): PostEdges => {
  return data.edges.map(({ node }) => {
    const {
      id,
      path,
      title,
      date,
      excerpt,
      featured_media: { localFile: image },
    } = node;
    const d = new Date(date);
    return {
      node: {
        id,
        timeToRead: 10,
        frontmatter: {
          series: null,
          categories: [],
          date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
          image,
          subtitle: excerpt.replace(/<p>|<\/p>/g, ''),
          title,
        },
        fileAbsolutePath: '',
        fields: {
          slug: path,
          lang: 'pt',
          commonSlug: path,
        },
      },
    };
  });
};
