import React from 'react';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import { blogComponents } from '../components/MdxComponents';

export default function LayoutBlog({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <MDXProvider components={blogComponents}>{children}</MDXProvider>;
}
