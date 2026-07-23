"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  // Función que dispara el evento para que el Header lo escuche y abra el modal
  const handleOpenContact = () => {
    window.dispatchEvent(new Event("openContactModal"));
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-6 z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* ROW 1: Logo y Datos de Contacto */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Parte Izquierda: Logo y Texto centrado */}
          <div className="flex flex-col items-center gap-3">
            <Link href="/" className="text-white text-3xl font-bold tracking-wider">
              VIDEOMASTER
            </Link>
            <div className="text-zinc-400 font-medium tracking-widest text-sm leading-relaxed text-center">
              VIDEOMASTER <br />
              PRODUCCIONES
            </div>
          </div>

          {/* Parte Derecha: Datos físicos */}
          <div className="flex flex-col items-center md:items-end text-zinc-400 text-sm font-light gap-2">
            <p>Plaza Julio Lazúrtegui 10, 1C, Ponferrada</p>
            <p>+34 600 696 191</p>
            <a href="mailto:producciones@videomaster.tv" className="hover:text-white transition-colors">
              producciones@videomaster.tv
            </a>
          </div>
        </div>

        {/* ROW 2: Copyright y Redes */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs text-center md:text-left">
            © 2026 Videomaster TV. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6 text-zinc-400">
            {/* El enlace de YouTube (pon aquí tu canal real) */}
            <a 
              href="https://www.youtube.com/c/VIDEOMASTERProducciones" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-600 transition-colors"
              aria-label="Canal de YouTube"
            >
              <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round" 
  className="w-6 h-6"
>
  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
  <path d="m10 15 5-3-5-3z" />
</svg>
            </a>
            
            {/* El botón que abre el modal de contacto */}
            <button 
              onClick={handleOpenContact} 
              className="hover:text-red-600 transition-colors cursor-pointer" 
              aria-label="Abrir formulario de contacto"
            >
              <Mail className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}