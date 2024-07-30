/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openui.fly.dev',
        pathname: '/openui/**',
      },
    ],
    dangerouslyAllowSVG: true, // Habilita o carregamento de SVGs remotos
  },
};

export default nextConfig;
