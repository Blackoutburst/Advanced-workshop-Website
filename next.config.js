/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => [
    {
      source: '*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: ['visage.surgeplay.com'],
},
}

module.exports = nextConfig
