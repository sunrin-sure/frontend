/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
      styledComponents: true,
    },
    async rewrites() {
      const BASE_URL = process.env.NODE_ENV === 'development' ? 'https://sunrin-sure.herokuapp.com' : 'https://api.rarp.kr'
      return [
        {
          source: '/:path*',
          destination: `${BASE_URL}/:path*`,
        },
      ];
    },
  }
  
  module.exports = nextConfig