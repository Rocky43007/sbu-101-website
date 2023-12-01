/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.vecteezy.com', 'media.istockphoto.com', 'img.freepik.com', 'cdn2.vectorstock.com', 'st3.depositphotos.com', 'videohive.img.customer.envatousercontent.com'],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
