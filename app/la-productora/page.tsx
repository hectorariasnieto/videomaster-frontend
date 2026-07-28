"use client";

import { motion, Variants } from "framer-motion";
import { 
  Video, Building2, Clapperboard, Tv, Radio, Camera, 
  MonitorPlay, Wifi, PlaneTakeoff, Film, HardDrive, Wrench 
} from "lucide-react";

export default function LaProductoraPage() {
  const servicios = [
    { titulo: "Realización y producción", descripcion: "Contenido audiovisual completo, desde la idea inicial hasta el producto final.", icono: <Video className="w-10 h-10 text-red-600" /> },
    { titulo: "Vídeo corporativo", descripcion: "Vídeos que representan la esencia de tu marca, empresa o institución.", icono: <Building2 className="w-10 h-10 text-red-600" /> },
    { titulo: "Documentales", descripcion: "Contamos historias reales que informan, inspiran y emocionan.", icono: <Clapperboard className="w-10 h-10 text-red-600" /> },
    { titulo: "Publicidad", descripcion: "Producimos anuncios impactantes para cine, televisión y entornos digitales.", icono: <Tv className="w-10 h-10 text-red-600" /> },
    { titulo: "Cobertura ENG", descripcion: "Servicios y cobertura profesional para informativos y programas.", icono: <Radio className="w-10 h-10 text-red-600" /> },
    { titulo: "Fotografía", descripcion: "Capturamos imágenes que cuentan historias, complementando el vídeo.", icono: <Camera className="w-10 h-10 text-red-600" /> },
    { titulo: "C.C.TV", descripcion: "Instalación y realización multicámara para circuito cerrado en eventos.", icono: <MonitorPlay className="w-10 h-10 text-red-600" /> },
    { titulo: "Streaming", descripcion: "Transmitimos eventos en directo con la mejor calidad y sin cortes.", icono: <Wifi className="w-10 h-10 text-red-600" /> },
    { titulo: "Imágenes aéreas", descripcion: "Grabación con drones de última tecnología para perspectivas únicas.", icono: <PlaneTakeoff className="w-10 h-10 text-red-600" /> },
    { titulo: "Cine Super-8", descripcion: "Conservamos el cine clásico con transferencias digitales de Super-8.", icono: <Film className="w-10 h-10 text-red-600" /> },
    { titulo: "Digitalización", descripcion: "Conversión multiformato: HI-8, Mini-DV, Umatic, Betacam, VHS, Beta.", icono: <HardDrive className="w-10 h-10 text-red-600" /> },
    { titulo: "Alquiler", descripcion: "Material técnico de primera línea para tus propios rodajes.", icono: <Wrench className="w-10 h-10 text-red-600" /> }
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const textReveal: Variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      
      <div className="pt-20">
        
        {/* SECCIÓN 1: Quiénes Somos (Título Izquierda, Texto Derecha) */}
        <section className="relative w-full border-b border-zinc-900/50">
          <div className="max-w-[95%] mx-auto px-4 md:px-8 flex flex-col md:flex-row pb-32 md:pb-64">
            
            {/* Contenedor Sticky para el Título */}
            <div className="md:w-1/2 relative pt-24 md:pt-40">
              <div className="md:sticky md:top-40 overflow-hidden">
                <motion.h1 
                  initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} variants={textReveal}
                  className="text-6xl md:text-[8vw] lg:text-[7vw] font-black uppercase leading-[0.85] tracking-tighter"
                >
                  Quiénes <br />
                  <span className="text-zinc-700">Somos</span>
                </motion.h1>
              </div>
            </div>

            {/* Texto en Scroll */}
            <div className="md:w-1/2 pt-12 md:pt-[40vh] flex flex-col gap-12 md:pl-16">
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-5xl font-light leading-snug text-zinc-300">
                <span className="text-white font-medium">Desde 1985,</span> hemos estado a la vanguardia de la producción audiovisual.
              </motion.p>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed">
                A lo largo de los años, hemos trabajado en una amplia variedad de proyectos, desde noticias y documentales, hasta vídeos corporativos y publicidad, adaptados para cine, televisión y plataformas digitales.
              </motion.p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: Nuestra Filosofía (Título Derecha, Texto Izquierda) */}
        <section className="relative w-full border-b border-zinc-900/50">
          <div className="max-w-[95%] mx-auto px-4 md:px-8 flex flex-col md:flex-row pb-32 md:pb-64">
            
            {/* Texto en Sroll */}
            <div className="md:w-1/2 order-2 md:order-1 pt-12 md:pt-[40vh] flex flex-col gap-12 md:pr-16">
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-5xl font-light leading-snug text-zinc-300">
                Un equilibrio exacto entre <span className="text-red-600 font-medium">innovación y experiencia.</span>
              </motion.p>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed">
                Nos apasiona estar a la vanguardia, ofreciendo siempre resultados con la calidad broadcast que nos distingue, cuidando el detalle en cada fotograma.
              </motion.p>
            </div>

            {/* Contenedor Sticky para el Título */}
            <div className="md:w-1/2 order-1 md:order-2 relative pt-24 md:pt-40">
              <div className="md:sticky md:top-40 md:text-right overflow-hidden">
                <motion.h2 
                  initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} variants={textReveal}
                  className="text-6xl md:text-[8vw] lg:text-[7vw] font-black uppercase leading-[0.85] tracking-tighter"
                >
                  Nuestra <br />
                  <span className="text-zinc-700">Filosofía</span>
                </motion.h2>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN 3: Lo que nos mueve (Título Izquierda, Texto Derecha) */}
        <section className="relative w-full">
          <div className="max-w-[95%] mx-auto px-4 md:px-8 flex flex-col md:flex-row pb-32 md:pb-48">
            
            <div className="md:w-1/2 relative pt-24 md:pt-40">
              <div className="md:sticky md:top-40 overflow-hidden">
                <motion.h2 
                  initial="hidden" whileInView="visible" viewport={{ margin: "-100px" }} variants={textReveal}
                  className="text-6xl md:text-[8vw] lg:text-[7vw] font-black uppercase leading-[0.85] tracking-tighter"
                >
                  Lo que nos <br />
                  <span className="text-red-600">Mueve</span>
                </motion.h2>
              </div>
            </div>

            <div className="md:w-1/2 pt-12 md:pt-[40vh] flex flex-col gap-12 md:pl-16">
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-light leading-snug text-zinc-300">
                Mantenernos siempre actualizados, tanto en formatos como en herramientas.
              </motion.p>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed">
                Queremos ofrecer un servicio ágil, eficiente y a la altura de los desafíos de cada cliente. Tu visión es el motor que nos impulsa a seguir innovando tras casi 40 años en la industria.
              </motion.p>
            </div>
          </div>
        </section>

      </div>

      {/* =========================================
          SECCIÓN: QUÉ HACEMOS (Estilo Cards Home)
          ========================================= */}
      <section className="bg-[#0a0a0a] py-32 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Título Centrado */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUp} 
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
              Qué <span className="text-red-600">Hacemos</span>
            </h2>
          </motion.div>

          {/* Grid de Tarjetas */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {servicios.map((servicio, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="bg-[#18181b] border border-zinc-800/80 rounded-2xl p-8 hover:border-zinc-700 transition-colors flex flex-col"
              >
                <div className="mb-6">
                  {servicio.icono}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {servicio.titulo}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                  {servicio.descripcion}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </main>
  );
}