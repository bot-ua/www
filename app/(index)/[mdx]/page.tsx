import React from 'react';
import PageLayout from '../components/page.component';
import * as fs from 'fs/promises';
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { MDXComponents } from 'mdx/types';

function useMDXComponents(components: MDXComponents = {}): MDXComponents {
    return {
      p: ({ children }) => <p>{children}</p>,
      ...components,
    }
  }

const Page = async ({ params }: { params: { mdx: string } }) => {
    const components = useMDXComponents();
    const content = await fs.readFile(`${process.env.DOCS_PATH}/${params.mdx}.mdx`, 'utf-8');
    console.log(content);
    return (
        <PageLayout>
            <MDXRemote source={content} components={components} />
        </PageLayout>
    );
};

export default Page;