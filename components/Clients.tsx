"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeInSection from "./FadeInSection";

const CLIENT_LOGOS = [
  "/brands/tve.png",
  "/brands/Renfe_Logo.png",
  "/brands/antena3.png",
  "/brands/Telecinco.png",
  "/brands/Cuatro.svg.png",
  "/brands/TeleMadrid.svg.png",
  "/brands/Endesa.svg.png",
  "/brands/FCC.png",
  "/brands/Bergidum-logo.png",
  "/brands/Ayto_Madrid.png",
  "/brands/Ayto_Ponferrada.png",
  "/brands/ciuden.png",
  "/brands/canedo.png",
  "/brands/UIMP.png",
  "/brands/Conservatorio.png",
  "/brands/Antonio_Pereira.png",
  "/brands/casardeburbia.png",
  "/brands/aurtec.png",
  "/brands/diputaciondeleon.png",
  "/brands/DO_Bierzo.png",
  "/brands/junta.png",
  "/brands/lacteaszamoro.png",
  "/brands/ladehesa.png",
  "/brands/fund-prada-a-tope.png",
  "/brands/Losada.png",
  "/brands/meiji_log.png",
  "/brands/MG_instituto.png",
  "/brands/MLP.png",
  "/brands/Pinguinos.png",
  "/brands/prada.png",
  "/brands/tecglass.png", 
  "/brands/trebol.png",
  "/brands/valcarce.png",
  "/brands/vinos-de-arganza-logo.png"
  
];

export default function Clients() {
  // Estado para controlar el carrusel en móviles
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(CLIENT_LOGOS.length / itemsPerPage);

  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  // Calcula qué 4 logos mostrar en móvil según la página actual
  const mobileVisibleLogos = CLIENT_LOGOS.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-16 text-center">
            Confían en <span className="text-red-600">nosotros</span>
          </h2>
        </FadeInSection>

        {/* --- VERSIÓN DESKTOP: Cuadrícula de 6 columnas --- */}
        <div className="hidden md:grid grid-cols-6 gap-8 items-center">
          {CLIENT_LOGOS.map((logo, index) => (
            <FadeInSection key={index} className="flex justify-center">
              <img 
                src={logo} 
                alt={`Cliente ${index + 1}`} 
                className="w-28 md:w-32 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              />
            </FadeInSection>
          ))}
        </div>

        {/* --- VERSIÓN MÓVIL: Carrusel de 4 elementos --- */}
        <div className="md:hidden flex flex-col items-center">
          <div className="grid grid-cols-2 gap-8 mb-8 w-full place-items-center">
            {mobileVisibleLogos.map((logo, index) => (
              <img 
                key={index}
                src={logo} 
                alt={`Cliente móvil ${index + 1}`} 
                className="w-28 object-contain grayscale opacity-60"
              />
            ))}
          </div>
          
          <div className="flex gap-4">
            <button onClick={prevPage} className="p-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-black transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextPage} className="p-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-black transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}