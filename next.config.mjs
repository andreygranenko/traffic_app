/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm-cdn.phonearena.com',
      }
    ]
  }
};

export default nextConfig;
