import withPWA from "next-pwa";
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  // output: 'export',
  images: {
    unoptimized: true,
    domains: ["localhost", "*"],
  },
};

export default withPWA({
  dest: "public",
  disable: true,
  register: true,
  skipWaiting: true,
})(nextConfig);
