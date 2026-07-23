"use client";

import { useState, useMemo } from "react";
import FadeInSection from "./FadeInSection";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Definimos la estructura que esperamos recibir del servidor
export default function ProjectsFilter({ projects }: { projects: any[] }) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // 1. Formateamos los datos de Strapi para que sean más fáciles de usar
  const formattedProjects = useMemo(() => {
    if (!projects) return [];
    
    return projects.map((p) => {
      const { Titulo, VideoURL, Categoria, Miniatura } = p.attributes;
      
      // Construimos la URL de la imagen local de Strapi
      const imageUrl = Miniatura?.data?.attributes?.url 
        ? `http://localhost:1337${Miniatura.data.attributes.url}` 
        : "/placeholder.png";
      
      return {
        id: p.id,
        title: Titulo,
        video: VideoURL,
        category: Categoria || "Sin Categoría", // Fallback por si algún proyecto no tiene categoría
        thumb: imageUrl
      };
    });
  }, [projects]);

  // 2. Extraemos las categorías únicas automáticamente
  const CATEGORIES = ["Todos", ...Array.from(new Set(formattedProjects.map(p => p.category)))];

  // 3. Filtramos según la pestaña activa
  const filteredProjects = activeCategory === "Todos" 
    ? formattedProjects 
    : formattedProjects.filter(project => project.category === activeCategory);

  if (formattedProjects.length === 0) {
    return <p className="text-zinc-500 text-center py-20">No hay proyectos publicados todavía.</p>;
  }

  return (
    <>
      {/* --- SISTEMA DE PESTAÑAS --- */}
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
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-video bg-zinc-900"
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

      {/* Overlay del Vídeo */}
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
    </>
  );
}