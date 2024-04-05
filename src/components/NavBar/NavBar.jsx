import Link from "next/link"
import Image from "next/image"

export default function NavBar() {
    return (
        <header className="absolute flex flex-col w-full md:flex-row justify-between items-center p-4 text-purple-700 uppercase z-10">
            <Link href="/">
                <Image src="/logo.png" alt="TECHNICODERS" width={80} height={80} priority />
            </Link>
            <nav>
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <li>
                        <Link href='/'>
                            Inicio                            
                        </Link>
                    </li>
                    <li>                        
                        <Link href="/nosotros">Sobre nosotros</Link>
                    </li>
                    <li>
                        <Link href="/contacto">contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
