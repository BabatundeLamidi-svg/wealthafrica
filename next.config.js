/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/articles/gold-paradox',
        destination: '/analysis/golden-mirage',
        permanent: true,
      },
      {
        source: '/long-reads/gold-paradox',
        destination: '/analysis/golden-mirage',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
