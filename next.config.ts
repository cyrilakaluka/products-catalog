import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://cdn.pixabay.com/photo/**')],
  },
};

export default nextConfig;
