import FadeInSection from "./FadeInSection";
import { Film, MonitorPlay, Clapperboard, Video } from "lucide-react";

const SERVICES = [
  {
    icon: <Film className="w-12 h-12 text-red-600 mb-6" />,
    title: "Producción Comercial",
    desc: "Spots publicitarios de alto impacto visual diseñados para campañas de televisión y medios digitales."
  },
  {
    icon: <Video className="w-12 h-12 text-red-600 mb-6" />,
    title: "Cobertura de Eventos",
    desc: "Capturamos la esencia de tus eventos corporativos, festivales y conciertos con equipos multicámara."
  },
  {
    icon: <MonitorPlay className="w-12 h-12 text-red-600 mb-6" />,
    title: "Postproducción",
    desc: "Edición avanzada, etalonaje, diseño sonoro y efectos visuales para llevar tus vídeos al siguiente nivel."
  },
  {
    icon: <Clapperboard className="w-12 h-12 text-red-600 mb-6" />,
    title: "Vídeo Corporativo",
    desc: "Transmitimos los valores de tu empresa con vídeos internos, testimoniales y documentales de marca."
  }
];

export default function Services() {
  return (
    <section className="w-full bg-zinc-950 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            Nuestros <span className="text-red-600">Servicios</span>
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <FadeInSection key={index} className="bg-zinc-900 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 border border-zinc-800 hover:border-red-600/50 group">
              {service.icon}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.desc}
              </p>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}