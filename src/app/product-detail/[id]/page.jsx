import Image from "next/image"

export async function generateMetadata({params}){
    const  {id, attributes: { titulo }} = await getPoject(params.id)
    // console.log(project)
    return {
        title: `${id} - ${titulo}`,
        description: `Detalle del producto ${titulo}`,
        // keywords: 'Product detail page keywords',
        // image: 'Product detail page image'
    }

}

const getPoject = async (id) => {
    const url = process.env.NEXT_PUBLIC_API_URL
    const query = `proyectos/${id}?populate=*`
    // console.log(`${url}/${query}`)
    const response = await fetch(`${url}/${query}`, { 
        cache: 'no-cache', 
        // cache: 'force-cache', 
        // next: {
        //     revalidate: 60 * 60 * 24
        // }
    }).then(response => response.json())
    // const response = await responseJson.json()
    // console.log(response.data)
    return response.data    
}


export default async function PoductDetailPage({params}) {
    const { id } = params
    const url_base = process.env.NEXT_PUBLIC_BASE_URL
    
    const project = await getPoject(id)
    
    // console.log(`${project.attribute}`)
    
    
    return (
        <div className="relative flex pt-24 3xl:pt-48 w-full">

            <Image 
                src={`${url_base}${project.attributes.imagen_producto.data.attributes.url}`} 
                className="w-1/2"
                alt="Project image" 
                width={1920} 
                height={1080} 
            />
            <div className="flex flex-col items-center text-white w-full">
                <h1 className="text-4xl font-bold">{project.attributes.titulo}</h1>
                <h2 className="text-lg">{project.attributes.descripcion}</h2>
            </div>
        </div>
    )
}
