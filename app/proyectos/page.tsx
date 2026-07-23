"use client";

import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Datos de prueba con las nuevas categorías
const ALL_PROJECTS = [
  { id: 1, title: "Promo Destino", thumb: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4", category: "Turismo" },
  { id: 2, title: "Spot Institucional", thumb: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4", category: "Comunicación Institucional" },
  { id: 3, title: "Presentación Empresa", thumb: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4", category: "Corporativo" },
  { id: 4, title: "Cortometraje 'El Eco'", thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4", category: "Cine" },
  { id: 5, title: "Documental Naturaleza", thumb: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4", category: "Documental" },
  { id: 6, title: "Ruta del Cares", thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", video: "https://www.w3schools.com/html/mov_bbb.mp4", category: "Turismo" },
];

// 2. Extraemos las categorías únicas automáticamente y añadimos "Todos" al principio
const CATEGORIES = ["Todos", ...Array.from(new Set(ALL_PROJECTS.map(p => p.category)))];

export default function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // 3. Filtramos los proyectos en base a la categoría seleccionada
  const filteredProjects = activeCategory === "Todos" 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(project => project.category === activeCategory);

  return (
    <main className="w-full min-h-screen bg-zinc-950 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        <FadeInSection>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nuestro <span className="text-red-600">Trabajo</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 font-light">
            Explora nuestro portfolio de producciones audiovisuales. Cada proyecto es una historia única contada a través de la excelencia técnica y visual.
          </p>
        </FadeInSection>

        {/* --- SISTEMA DE PESTAÑAS (TABS) --- */}
        <FadeInSection>
          <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-12 border-b border-zinc-900 pb-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative pb-2 text-sm md:text-base font-medium tracking-widest uppercase transition-colors duration-300 ${
                  activeCategory === category 
                    ? "text-white" 
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {category}
                {/* Línea animada debajo de la pestaña activa */}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </FadeInSection>

        {/* --- CUADRÍCULA ANIMADA --- */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-video"
                onClick={() => setActiveVideo(project.video)}
              >
                <img 
                  src={project.thumb} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-red-500 text-xs font-bold tracking-widest uppercase mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Mensaje por si una categoría se queda vacía en el futuro */}
        {filteredProjects.length === 0 && (
          <p className="text-zinc-500 text-center py-20 animate-fade-in-up">
            No hay proyectos en esta categoría.
          </p>
        )}

      </div>

      {/* Overlay del Vídeo (Modal) */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
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
    </main>
  );
}