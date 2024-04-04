import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({id, image='Imagen', title='Título por defecto', description='Descrición por defecto'}) {
    
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${image}`
    
    return (
        <div className="block rounded-lg bg-white w-56  2xl:w-72 2xl:mt-32">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <Image 
                    className="rounded-lg sm:m-h-64 md:h-48 w-full" 
                    src={url}                                        
                    alt=""
                    width={256}
                    height={256}
                />
                <Link href={`/product-detail/${id}`}>
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </Link>
            </div>

            <div className="p-2">
                <div className="flex justify-between">
                    <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 uppercase">
                        {title}
                    </h5>
                    <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 flex"></h5>
                </div>
                <p className="mb-4 text-base text-neutral-600 ">
                    {description.slice(0,60)} ...
                </p>
                <Link href={`/product-detail/${id}`} className="mb-2 text-sm font-bold leading-tight text-neutral-800 ">
                    Ver projecto
                </Link>
            </div>
        </div>
    )
}
