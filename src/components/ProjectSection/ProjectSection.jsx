import ProjectsList from "../ProjectsList/ProjectsList";


export default function ProjectSection() {
    return (
        <section className="relative  w-full h-full bg-gray-300 py-10">
            <h3 className="ml-5 uppercase"><strong>Projectos</strong></h3>
            <ProjectsList />        
        </section>
    )
}
