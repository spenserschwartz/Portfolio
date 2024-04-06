/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "travelperfect-bucket.s3.us-west-1.amazonaws.com" },
      { hostname: "travelperfect.io" },
    ],
  },
};

export default nextConfig;
