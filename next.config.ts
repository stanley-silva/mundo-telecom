import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/solucoes/omnichannel-ia-aikon',
        destination: '/aikom',
        permanent: true,
      },
      {
        source: '/omnichannel-ia-aikon',
        destination: '/aikom',
        permanent: true,
      },
      {
        source: '/solucoes/omnichannel-ia-aikom',
        destination: '/aikom',
        permanent: true,
      },
      {
        source: '/solucoes/aikom',
        destination: '/aikom',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
