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
        // Si alguien entra en la antigua URL...
        source: '/la-empresa',
        // ...lo llevamos a la nueva
        destination: '/la-productora',
        permanent: true, // Esto es el 301 (vital para SEO)
      },
      {
        source: '/galeria-de-videos',
        destination: '/proyectos',
        permanent: true,
      },
      {
        // Páginas antiguas que ya no existen, las mandamos a la Home o a Productora
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
        source: '/novedades',
        destination: '/proyectos',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;