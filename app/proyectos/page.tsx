import FadeInSection from "@/components/FadeInSection";
import ProjectsFilter from "@/components/ProjectsFilter";

// Función del servidor para pedir los datos a Strapi
async function getData() {
  try {
    // 1. Obtenemos los proyectos con sus imágenes y categorías
    const resProyectos = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/proyectos?populate=*`, {
      cache: "no-store", 
    });
    
    // 2. Obtenemos las categorías ordenadas por el cliente
    const resCategorias = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categorias?sort=Orden:asc`, {
      cache: "no-store",
    });
    
    if (!resProyectos.ok) throw new Error("Fallo al cargar proyectos");
    
    const jsonProyectos = await resProyectos.json();
    const jsonCategorias = await resCategorias.json();

    return {
      projects: jsonProyectos.data || [],
      categories: jsonCategorias.data || []
    };
  } catch (error) {
    console.error(error);
    return { projects: [], categories: [] };
  }
}

export default async function ProyectosPage() {
  // Descargamos los datos reales desde Strapi antes de renderizar la página
  const { projects, categories } = await getData();

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

        {/* Le inyectamos proyectos y categorías al componente interactivo */}
        <ProjectsFilter projects={projects} categories={categories} />
        
      </div>
    </main>
  );
}