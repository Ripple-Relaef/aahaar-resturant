import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'build',
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add these if you're having issues
};

export default nextConfig;