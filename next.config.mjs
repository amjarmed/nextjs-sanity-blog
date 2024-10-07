/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n config
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: ['images.unsplash.com', 'learnwebcode.github.io'],
  },
};

export default nextConfig;
