/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "backk.horse-travel.com",
        pathname: "/**",
      },
    ],
  },
};
// domains: ["backk.horse-travel.com"],
