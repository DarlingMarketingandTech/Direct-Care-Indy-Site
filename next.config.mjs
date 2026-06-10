/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/pricing",
        destination: "/membership",
        permanent: true,
      },
      {
        source: "/pricing/:path*",
        destination: "/membership",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/what-is-dpc#faq",
        permanent: true,
      },
      {
        source: "/faq/:path*",
        destination: "/what-is-dpc#faq",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/providers",
        permanent: true,
      },
      {
        source: "/team/:path*",
        destination: "/providers",
        permanent: true,
      },
      {
        source: "/providers/maddie-klinger",
        destination: "/providers",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/djhqowk67/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "health.gov",
      },
    ],
  },
  turbopack: {},
};

export default nextConfig;
