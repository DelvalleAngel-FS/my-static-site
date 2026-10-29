/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Keeps the static export active
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
