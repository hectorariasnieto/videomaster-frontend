"use client";

import CountUp from "react-countup";
import FadeInSection from "./FadeInSection";

export default function Counters() {
  return (
    <section className="w-full bg-red-600 py-24 px-6 border-y border-red-700">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
        
        <FadeInSection>
          <div className="text-6xl font-black mb-4 tracking-tighter">
            <CountUp end={250} duration={3} enableScrollSpy scrollSpyOnce />+
          </div>
          <p className="text-red-200 text-lg font-medium uppercase tracking-widest">Proyectos Entregados</p>
        </FadeInSection>

        <FadeInSection>
          <div className="text-6xl font-black mb-4 tracking-tighter">
            <CountUp end={15} duration={3} enableScrollSpy scrollSpyOnce />
          </div>
          <p className="text-red-200 text-lg font-medium uppercase tracking-widest">Años de Experiencia</p>
        </FadeInSection>

        <FadeInSection>
          <div className="text-6xl font-black mb-4 tracking-tighter">
            <CountUp end={40} duration={3} enableScrollSpy scrollSpyOnce />+
          </div>
          <p className="text-red-200 text-lg font-medium uppercase tracking-widest">Premios Ganados</p>
        </FadeInSection>

      </div>
    </section>
  );
}