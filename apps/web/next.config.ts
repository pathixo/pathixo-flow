import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@pathixo/ui', '@pathixo/design-tokens'],
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;

