"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Play, X } from "lucide-react";
import FadeInSection from "./FadeInSection";

// Función inteligente para convertir links normales de YouTube/Vimeo en links de inserción (embed)
const getEmbedUrl = (url: string) => {
  if (!url) return "";
  
  // Detectar YouTube
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&]{11})/);
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`;
  }
  
  // Detectar Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?([0-9]+)/);
  if (vimeoMatch && vimeoMatch[1]) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  }
  
  // Si no es YouTube ni Vimeo, devolvemos la URL tal cual (para archivos .mp4)
  return url;
};

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Cargamos los proyectos destacados desde Strapi al arrancar el componente
  useEffect(() => {
    async function fetchFeatured() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}/api/proyectos?filters[Destacado][$eq]=true&populate=*`);
        const json = await res.json();
        const rawData = json.data || [];

        const formatted = rawData.map((p: any) => {
          const projectData = p.attributes || p;
          const { Titulo, VideoURL, Miniatura } = projectData;

          const miniaturaUrl = Miniatura?.url || Miniatura?.data?.attributes?.url;
          const imageUrl = miniaturaUrl 
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}${miniaturaUrl}` 
            : "/placeholder.png";

          return {
            id: p.id || p.documentId || Math.random(),
            title: Titulo || "Sin Título",
            thumb: imageUrl,
            video: VideoURL || "",
          };
        });

        setProjects(formatted);
      } catch (error) {
        console.error("Error al cargar proyectos destacados:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFeatured();
  }, []);

  return (
    <section className="w-full bg-black/95 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            Proyectos <span className="text-red-600">Destacados</span>
          </h2>
        </FadeInSection>

        {loading ? (
          <div className="text-center text-zinc-500 py-12">Cargando destacados...</div>
        ) : projects.length === 0 ? (
          <div className="text-center text-zinc-500 py-12">No hay proyectos destacados seleccionados en Strapi.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {projects.map((project) => (
              <FadeInSection key={project.id} className="relative group cursor-pointer overflow-hidden rounded-lg aspect-video" >
                <div onClick={() => setActiveVideo(project.video)}>
                  <img 
                    src={project.thumb} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        )}

        <FadeInSection className="text-center">
          <Link href="/proyectos" className="inline-block border-2 border-white text-white px-10 py-4 font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
            Ver todo el portfolio
          </Link>
        </FadeInSection>
      </div>

      {/* Overlay del Vídeo (Modal con soporte para YouTube, Vimeo y MP4) */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-8 right-8 text-white hover:text-red-600 transition-colors z-50"
          >
            <X className="w-10 h-10" />
          </button>
          
          {activeVideo.includes("youtu") || activeVideo.includes("vimeo") ? (
            <iframe 
              src={getEmbedUrl(activeVideo)} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full max-w-5xl aspect-video rounded shadow-2xl border-0"
            />
          ) : (
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              className="w-full max-w-5xl aspect-video rounded shadow-2xl"
            />
          )}
        </div>
      )}
    </section>
  );
}