/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n config
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: false
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      },
      {
        protocol: 'https',
        hostname: 'simpleicons.org'
      }
    ]
  }
};

export default nextConfig;
