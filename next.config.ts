import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      include: /public\/.*\.svg$/, // this allows icon.svg in app dir to work. All SVGs to be handled by SVGR are in src/assets
      use: ["@svgr/webpack"],
    });

    return config;
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withMDX(nextConfig);
