import ProjectCard from "../ProjectCard/ProjectCard"

const getProjects = async () => {
    // NEXT_PUBLIC_API_URL de process
    const url = process.env.NEXT_PUBLIC_API_URL
    const query = 'proyectos?populate=*'
    
    const responseJson = await fetch(`${url}/${query}`)
    const response = await responseJson.json()
    return response.data    
}

export default async function ProjectsList() {
   
    const projects = await getProjects()

    return (
        <div 
            className="flex flex-row flex-wrap gap-3 w-full h-full animated fadeIn faster mt-10  left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none"
        >
            { 
                projects.map(project => (
                    <ProjectCard 
                        key={project.id} 
                        id={project.id}  
                        title={project.attributes.titulo}
                        description={project.attributes.descripcion}
                        image={project.attributes.imagen_resumen.data.attributes.url}
                    />
                ))
            }                                      
        </div>
    )
}

// export default ProjectsList