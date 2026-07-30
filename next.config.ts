/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'http', hostname: '127.0.0.1' },
      { protocol: 'https', hostname: 'api.videomaster.tv' } 
    ],
  },
  async redirects() {
    return [
      {
        source: '/la-empresa',
        destination: '/la-productora',
        permanent: true,
      },
      {
        source: '/galeria-de-videos',
        destination: '/proyectos',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/proyectos',
        permanent: true,
      },
      {
        source: '/portfolio/:path*',
        destination: '/proyectos',
        permanent: true,
      },
      {
        source: '/nuestros-equipos',
        destination: '/la-productora',
        permanent: true,
      },
      {
        source: '/a-la-venta',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/a-la-venta/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/novedades/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contacto',
        destination: '/',
        permanent: true,
      },





      {
        source: '/novedades',
        destination: '/proyectos',
        permanent: true,
      }





    ];
  },
};

export default nextConfig;