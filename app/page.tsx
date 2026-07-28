import FadeInSection from "@/components/FadeInSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Counters from "@/components/Counters";
import Clients from "@/components/Clients"; 
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="w-full">
      {/* --- SECCIÓN 1: HERO CON VÍDEO --- */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de vídeo.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 pointer-events-none"></div>
        <div className="relative z-20 text-center animate-fade-in-up">
          <img src="/logoVM.svg" alt="Videomaster Producciones"/>
            <p className="text-xl md:text-4xl text-white mt-6 tracking-widest uppercase font-light drop-shadow-md">
              VIDEOMASTER
            <br/>
              PRODUCCIONES
            </p>
        </div>
      </section>

      {/* --- SECCIÓN 2: PRIMER TEXTO FADE-IN --- */}
      <section className="w-full h-screen bg-zinc-950 flex items-center justify-center px-6">
        <FadeInSection className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Contamos historias que <span className="text-red-600">conectan</span>.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            En Videomaster transformamos ideas en piezas audiovisuales de alto impacto. 
            No solo grabamos imágenes, capturamos la esencia de tu marca para emocionar a tu audiencia.
          </p>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            Utilizamos equipos de última generación y las técnicas de postproducción más avanzadas. 
            Desde el guion hasta el color final, cuidamos cada detalle con calidad de cine.
          </p>
        </FadeInSection>
      </section>

      {/* --- SECCIÓN 3: PROYECTOS DESTACADOS --- */}
      <FeaturedProjects />

      {/* --- SECCIÓN 4: CONTADORES ANIMADOS --- */}
      <Counters />

      {/* --- SECCIÓN 5: CLIENTES --- */}
      <Clients />

      {/* --- SECCIÓN 6: SERVICIOS --- */}
      <Services />
      
    </main>
  );
}