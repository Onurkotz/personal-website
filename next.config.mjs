/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    nextScriptWorkers: true,
    forceSwcTransforms: true,
  },
  trailingSlash: true,
};

export default nextConfig;
