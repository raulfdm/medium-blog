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
  tags?: string[];
  description?: string;
  series?: FrontmatterSeries;
  image?: FrontMatterImage;
  image_caption?: string;
};

type PostFields = {
  slug: string;
  lang?: string;
  postFolderName?: string;
};

export type PostTranslation = {
  slug: string;
  lang: string;
};

export type PostTranslations = PostTranslation[];

export type PostNode = {
  body?: string;
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
    allMdx: AllMarkdownRemark;
    site?: {
      siteMetadata: SiteMetadata;
    };
  };
};
