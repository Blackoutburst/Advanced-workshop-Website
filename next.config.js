/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      }
    ]
  },
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: ['visage.surgeplay.com'],
},
}

module.exports = nextConfig
