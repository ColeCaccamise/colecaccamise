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

  async redirects() {
    return [
      {
        source: "/twitter",
        destination: "https://caccamise.link/x",
        permanent: false,
      },
      {
        source: "/x",
        destination: "https://caccamise.link/x",
        permanent: false,
      },
      {
        source: "/ig",
        destination: "https://caccamise.link/ig",
        permanent: false,
      },
      {
        source: "/visibly",
        destination: "https://caccamise.link/visibly",
        permanent: false,
      },
      {
        source: "/terminal",
        destination: "https://caccamise.link/warp",
        permanent: false,
      },
      {
        source: "/macos-dock-settings",
        destination: "https://caccamise.link/dock",
        permanent: false,
      },
      {
        source: "/raycast",
        destination: "https://caccamise.link/raycast",
        permanent: false,
      },
      {
        source: "/arc",
        destination: "https://caccamise.link/arc",
        permanent: false,
      },
      {
        source: "/superhuman",
        destination: "https://caccamise.link/superhuman",
        permanent: false,
      },
      {
        source: "/calendar",
        destination: "https://caccamise.link/calendar",
        permanent: false,
      },
      {
        source: "/amie",
        destination: "https://caccamise.link/amie",
        permanent: false,
      },
      {
        source: "/screen-recorder",
        destination: "https://caccamise.link/screen",
        permanent: false,
      },
      {
        source: "/space-collection",
        destination: "https://caccamise.link/space-collection",
        permanent: false,
      },
      {
        source: "/drops/space-collection-wallpaper-pack",
        destination: "https://caccamise.link/space-collection",
        permanent: false,
      },
      {
        source: "/space-collection-wallpaper-pack",
        destination: "https://caccamise.link/space-collection",
        permanent: false,
      },
      {
        source: "/wallpapers",
        destination: "https://colecaccamise.com/drops",
        permanent: false,
      },
      {
        source: "/justcreate-wallpaper",
        destination: "https://colecaccamise.come/drops/prism",
        permanent: false,
      },
      {
        source: "/vscode-theme",
        destination: "https://caccamise.link/vscode",
        permanent: false,
      },
      {
        source: "/music",
        destination: "https://caccamise.link/music",
        permanent: false,
      },
      {
        source: "/rize",
        destination: "https://caccamise.link/rize",
        permanent: false,
      },
      {
        source: "/subscribe",
        destination: "https://caccamise.link/subscribe",
        permanent: false,
      },
      {
        source: "/recut",
        destination: "https://caccamise.link/recut",
        permanent: false,
      },
      {
        source: "/creatorpreneur",
        destination: "https://caccamise.link/creatorpreneur",
        permanent: false,
      },
      {
        source: "/framer",
        destination: "https://caccamise.link/framer",
        permanent: false,
      },
      {
        source: "/drops/justcreate-wallpaper",
        destination: "https://colecaccamise.com/drops/prism",
        permanent: false,
      },
      {
        source: "/kits/gaming-pc",
        destination: "https://colecaccamise.com/stack/pc",
        permanent: false,
      },
      {
        source: "/setapp",
        destination: "https://caccamise.link/setapp",
        permanent: false,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "colecaccamise.s3.us-east-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "colecaccamise.s3.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d27j5b63daowy8.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withMDX(nextConfig);
