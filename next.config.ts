import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i0.wp.com'],
  },
  async redirects() {
    return [
      {
        source: '/conexpo',
        destination: 'https://244285324.hs-sites-na2.com/constructwise-at-conexpo',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
