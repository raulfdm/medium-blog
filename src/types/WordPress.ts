import { FluidObject } from 'gatsby-image';
import { FrontMatterImage, SeriesType, FrontmatterSeries } from './';

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
  image?: FrontMatterImage;
  image_caption?: string;
  subtitle?: string;
  url: string;
  lang: string;
  excerpt?: string;
  description: string;
  series?: SeriesType;
  seriesInfo?: FrontmatterSeries;
};
