/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async rewrites() {
    return [
      {
        source: '/api/exp',
        destination: 'http://localhost:5000/api/exp',
      },
    ]
  },
};

export default nextConfig;
