//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
import { composePlugins, withNx } from '@nx/next';
import remarkGfm from 'remark-gfm'
import withMDX from '@next/mdx';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  output: 'standalone'
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withMDX({
    // Optionally provide remark and rehype plugins
    options: {
      // If you use remark-gfm, you'll need to use next.config.mjs
      // as the package is ESM only
      // https://github.com/remarkjs/remark-gfm#install
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      // If you use `MDXProvider`, uncomment the following line.
      // providerImportSource: "@mdx-js/react",
    },
  })
];

export default composePlugins(...plugins)(nextConfig);
