export const normalizeWpResponse = (data) => {
  return data.edges.map(({ node }) => {
    const {
      id,
      path,
      title,
      date,
      excerpt,
      featured_media: { localFile: image },
    } = node;
    return {
      node: {
        id,
        timeToRead: 10,
        frontmatter: {
          series: null,
          categories: [],
          date,
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
