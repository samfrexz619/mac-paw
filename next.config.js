/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // loader: 'custom',
    // loaderFile: '/public/assets/images/loader.png',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.thecatapi.com',
      }
    ]
  }
}

module.exports = nextConfig
