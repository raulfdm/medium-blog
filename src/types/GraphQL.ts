import { FluidObject } from 'gatsby-image';
import { PostSeries } from './Series';

export type FrontmatterSeries = PostSeries | null;

export type FrontMatterImage = {
  publicURL?: string;
  childImageSharp: {
    fluid: FluidObject;
  };
};

export type Frontmatter = {
  title: string;
  subtitle?: string;
  date: string;
  categories?: string[];
  description?: string;
  series?: FrontmatterSeries;
  image?: FrontMatterImage;
  image_caption?: string;
};

type PostFields = {
  slug: string;
  lang?: string;
  commonSlug?: string;
};

export type PostTranslation = {
  slug: string;
  lang: string;
};

export type PostTranslations = PostTranslation[];

export type PostNode = {
  htmlAst?: object;
  excerpt?: string;
  id?: string;
  timeToRead?: number;
  fields?: PostFields;
  frontmatter?: Frontmatter;
  translations?: PostTranslations;
};

export type PostEdge = {
  node: PostNode;
};

export type PostEdges = PostEdge[];

export type AllMarkdownRemark = {
  edges: PostEdges;
};

export type SocialSiteMetadata = {
  github: string;
  twitter: string;
  linkedIn: string;
};

export type SiteMetadata = {
  profilePic: string;
  siteUrl: string;
  social: SocialSiteMetadata;
  author: string;
};

export type GraphQLResponse = {
  data: {
    allMarkdownRemark: AllMarkdownRemark;
    site?: {
      siteMetadata: SiteMetadata;
    };
  };
};

type FeaturedMedia = {
  alt_text: string;
  caption: string;
  localFile: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
};

export type WordpressPost = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: Date;
  featured_media: FeaturedMedia;
};

export type PostTemplate = {
  title: string;
  image: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  image_caption?: string;
  subtitle?: string;
  url: string;
  lang: string;
  excerpt?: string;
  description: string;
  series?: PostSeries;
  seriesInfo?: PostSeries;
};

export type SeriesSection = {
  noDivider?: boolean;
  title: string;
  series?: PostSeries;
  seriesInfo?: PostSeries;
};
