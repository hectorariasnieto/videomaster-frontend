"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, X } from "lucide-react";
import FadeInSection from "./FadeInSection";

// Datos de prueba (Más adelante los traeremos de Strapi)
const MOCK_PROJECTS = [
  { id: 1, title: "Spot Deportivo", thumb: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 2, title: "Campaña Motor", thumb: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 3, title: "Festival Música", thumb: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 4, title: "Documental Naturaleza", thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

export default function FeaturedProjects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="w-full bg-black/95 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            Proyectos <span className="text-red-600">Destacados</span>
          </h2>
        </FadeInSection>

        {/* Cuadrícula de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {MOCK_PROJECTS.map((project) => (
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

        {/* Botón para ver más proyectos */}
        <FadeInSection className="text-center">
          <Link href="/proyectos" className="inline-block border-2 border-white text-white px-10 py-4 font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
            Ver todo el portfolio
          </Link>
        </FadeInSection>
      </div>

      {/* Overlay del Vídeo (Modal) */}
      {activeVideo && (
        <div className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-8 right-8 text-white hover:text-red-600 transition-colors"
          >
            <X className="w-10 h-10" />
          </button>
          <video 
            src={activeVideo} 
            controls 
            autoPlay 
            className="w-full max-w-5xl aspect-video rounded shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}