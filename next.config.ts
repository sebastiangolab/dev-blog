import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp-dev-blog-api.sebastiangolab.pl",
        port: "",
      },
    ],
  },
};

export default nextConfig;
