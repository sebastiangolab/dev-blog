import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.sebastiangolab.pl",
        port: "",
      },
    ],
  },
};

export default nextConfig;
