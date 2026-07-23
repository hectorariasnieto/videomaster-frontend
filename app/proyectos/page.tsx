import FadeInSection from "@/components/FadeInSection";
import ProjectsFilter from "@/components/ProjectsFilter";

// Función del servidor para pedir los datos a Strapi
async function getProjects() {
  try {
    // populate=* incluye las imágenes de las miniaturas en la respuesta
    const res = await fetch("http://localhost:1337/api/proyectos?populate=*", {
      cache: "no-store", // Desactiva la caché para ver los cambios de Strapi al instante
    });
    
    if (!res.ok) throw new Error("Fallo al cargar proyectos");
    
    const json = await res.json();
    return json.data; 
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function ProyectosPage() {
  // Descargamos los proyectos reales desde Strapi antes de renderizar la página
  const projects = await getProjects();

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

        {/* Le inyectamos los datos al componente interactivo */}
        <ProjectsFilter projects={projects} />
        
      </div>
    </main>
  );
}