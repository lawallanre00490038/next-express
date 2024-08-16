/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async rewrites() {
    return [
      {
        source: '/api/exp',
        destination: 'http://localhost:5000/api/custom/post/45'
      },
    ]
  },
};

export default nextConfig;
