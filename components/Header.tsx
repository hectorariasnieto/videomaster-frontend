"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importamos para saber la ruta actual
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname(); // Nos dice si estamos en "/" o en "/proyectos"
  const [showSticky, setShowSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        // Si estamos en la Home, el menú aparece justo cuando el vídeo hero termina (window.innerHeight)
        if (window.scrollY >= window.innerHeight - 80) {
          setShowSticky(true);
        } else {
          setShowSticky(false);
        }
      } else {
        // En cualquier otra página, el menú siempre está visible
        setShowSticky(true);
      }
    };

    // Comprobamos el estado nada más cargar por si el usuario recarga la página a mitad del scroll
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleOpenContact = () => {
    setIsMobileMenuOpen(false);
    setIsContactOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Formulario de prueba enviado!");
    setIsContactOpen(false);
  };

  return (
    <>
      {/* 
        Usamos translate-y para ocultar el menú hacia arriba. 
        Al bajar el scroll, se activa translate-y-0 y baja suavemente. 
      */}
      <header
        className={`fixed top-0 w-full z-50 transition-transform duration-500 bg-black/95 backdrop-blur-md border-b border-zinc-900 ${
          showSticky || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <Link 
            href="/" 
            className="text-white text-2xl font-bold tracking-wider relative z-[60]" 
            onClick={closeMenu}
          >
            VIDEOMASTER<span className="text-red-600">.</span>
          </Link>

          <nav className="hidden md:flex gap-8 text-white text-sm font-medium">
            <Link href="/" className="hover:text-red-500 transition-colors">
              HOME
            </Link>
            <Link href="/proyectos" className="hover:text-red-500 transition-colors">
              PROYECTOS
            </Link>
            <button 
              onClick={handleOpenContact} 
              className="hover:text-red-500 transition-colors uppercase"
            >
              CONTACTO
            </button>
          </nav>

          <button 
            className="md:hidden text-white relative z-[60] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menú"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Menú Móvil */}
      <div 
        className={`fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-10 text-white text-3xl font-medium text-center tracking-widest">
          <Link href="/" className="hover:text-red-500 transition-colors" onClick={closeMenu}>
            HOME
          </Link>
          <Link href="/proyectos" className="hover:text-red-500 transition-colors" onClick={closeMenu}>
            PROYECTOS
          </Link>
          <button 
            onClick={handleOpenContact} 
            className="hover:text-red-500 transition-colors uppercase tracking-widest"
          >
            CONTACTO
          </button>
        </nav>
      </div>

      {/* Overlay del Formulario de Contacto */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 w-full max-w-lg rounded-2xl p-8 md:p-12 relative border border-zinc-800 shadow-2xl animate-fade-in-up">
            
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <h2 className="text-3xl font-bold text-white mb-2">Hablemos</h2>
            <p className="text-zinc-400 mb-8 font-light">Cuéntanos sobre tu próximo gran proyecto.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-zinc-400 mb-1">Nombre</label>
                <input 
                  type="text" 
                  id="nombre" 
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="Tu nombre o empresa"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="hola@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-zinc-400 mb-1">Teléfono</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label htmlFor="proyecto" className="block text-sm font-medium text-zinc-400 mb-1">Cuéntanos tu proyecto</label>
                <textarea 
                  id="proyecto" 
                  rows={4}
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                  placeholder="Detalles sobre el estilo, presupuesto, fechas..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg mt-2 transition-colors uppercase tracking-widest text-sm"
              >
                Enviar Mensaje
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}