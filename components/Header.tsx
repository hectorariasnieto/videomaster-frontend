"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Loader2, CheckCircle2 } from "lucide-react";
import { enviarMensaje } from "@/app/actions/contacto";

export default function Header() {
  const pathname = usePathname();
  const [showSticky, setShowSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const listenForModal = () => {
      setIsMobileMenuOpen(false);
      setIsContactOpen(true);
      setIsSuccess(false);
    };

    window.addEventListener("openContactModal", listenForModal);
    return () => window.removeEventListener("openContactModal", listenForModal);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        if (window.scrollY >= window.innerHeight - 80) {
          setShowSticky(true);
        } else {
          setShowSticky(false);
        }
      } else {
        setShowSticky(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleOpenContact = () => {
    setIsMobileMenuOpen(false);
    setIsContactOpen(true);
    setIsSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const response = await enviarMensaje(formData);

    setIsSubmitting(false);

    if (response.success) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsContactOpen(false);
      }, 3000);
    } else {
      alert("Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <>
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

          {/* NAVEGACIÓN DESKTOP (Añadido "LA PRODUCTORA") */}
          <nav className="hidden md:flex gap-8 text-white text-sm font-medium">
            <Link href="/" className="hover:text-red-500 transition-colors">HOME</Link>
            <Link href="/la-productora" className="hover:text-red-500 transition-colors">LA PRODUCTORA</Link>
            <Link href="/proyectos" className="hover:text-red-500 transition-colors">PROYECTOS</Link>
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

      {/* NAVEGACIÓN MÓVIL (Añadido "LA PRODUCTORA") */}
      <div 
        className={`fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-10 text-white text-3xl font-medium text-center tracking-widest">
          <Link href="/" className="hover:text-red-500 transition-colors" onClick={closeMenu}>HOME</Link>
          <Link href="/la-productora" className="hover:text-red-500 transition-colors" onClick={closeMenu}>LA PRODUCTORA</Link>
          <Link href="/proyectos" className="hover:text-red-500 transition-colors" onClick={closeMenu}>PROYECTOS</Link>
          <button 
            onClick={handleOpenContact} 
            className="hover:text-red-500 transition-colors uppercase tracking-widest"
          >
            CONTACTO
          </button>
        </nav>
      </div>

      {/* OVERLAY DEL FORMULARIO DE CONTACTO */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 w-full max-w-lg rounded-2xl p-8 md:p-12 relative border border-zinc-800 shadow-2xl animate-fade-in-up">
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
                <CheckCircle2 className="w-20 h-20 text-red-600 mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">¡Mensaje Enviado!</h2>
                <p className="text-zinc-400 font-light">Gracias por contactar. Te responderemos lo antes posible.</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-white mb-2">Hablemos</h2>
                <p className="text-zinc-400 mb-8 font-light">Cuéntanos sobre tu próximo gran proyecto.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-zinc-400 mb-1">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="Tu nombre o empresa" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                    <input type="email" id="email" name="email" required className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="hola@ejemplo.com" />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-zinc-400 mb-1">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="+34 600 000 000" />
                  </div>
                  <div>
                    <label htmlFor="proyecto" className="block text-sm font-medium text-zinc-400 mb-1">Cuéntanos tu proyecto</label>
                    <textarea id="proyecto" name="proyecto" rows={4} required className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors resize-none" placeholder="Detalles sobre el estilo, presupuesto, fechas..."></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg mt-2 transition-colors uppercase tracking-widest text-sm flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</> : "Enviar Mensaje"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}