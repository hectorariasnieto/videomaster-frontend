import Link from "next/link";
import { Mail } from "lucide-react"; // Solo importamos el icono de Mail de lucide

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo de la compañía */}
        <Link href="/" className="text-white text-2xl font-bold tracking-wider">
          VIDEOMASTER<span className="text-red-600">.</span>
        </Link>

        {/* Texto legal / Copyright */}
        <p className="text-zinc-500 text-sm text-center md:text-left font-light">
          © {new Date().getFullYear()} Videomaster TV. Todos los derechos reservados.
        </p>

        {/* Redes sociales y Contacto */}
        <div className="flex gap-6">
          
          {/* Icono SVG de Instagram */}
          <a href="#" aria-label="Instagram" className="text-zinc-500 hover:text-red-500 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          
          {/* Icono SVG de LinkedIn */}
          <a href="#" aria-label="LinkedIn" className="text-zinc-500 hover:text-red-500 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* Icono de Mail (Este sí sigue en Lucide) */}
          <Link href="/contacto" aria-label="Contacto" className="text-zinc-500 hover:text-red-500 transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
          
        </div>
        
      </div>
    </footer>
  );
}