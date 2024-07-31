import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  images: {
    domains: ["lh3.googleusercontent.com", "localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/****",
      },
      {
        protocol: "https",
        hostname: "colecaccamise.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "colecaccamise.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withMDX(nextConfig);
