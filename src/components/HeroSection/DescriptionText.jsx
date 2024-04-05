'use client'
import { useEffect, useRef } from 'react'
import styles from './carousel.module.css'

export default function DescriptionText() {
    const parrafoP =useRef(null);

    useEffect(() => {
        // const p = document.querySelector('.parrafo');
        const texto = `Lorem ipsum dolor sit amet. Ut enim
        ad minim veniam.Lorem ipsum dolor sit amet. Ut enim
        ad minim veniam.`;

        function efectoEscritura(elemento, texto, i = 0) {
            
            // elemento.textContent += texto[i];
            elemento.textContent = texto.substring(0, i + 1);
            
            if (i === texto.length - 1) return;
            setTimeout(() => efectoEscritura(elemento, texto, i + 1), 70);
        }

        efectoEscritura(parrafoP.current, texto);
    },[] )
    // console.log(parrafoP.current)
    return (
        <div className="absolute bottom-10 w-[60%] h-full overflow-hidden flex flex-col justify-end items-center text-center text-purple-900 font-bold z-50">
            <div className="mt-[-10%] 2xl:mt-8">
                <p 
                    className={`text-md md:text-2xl`} 
                    ref={parrafoP}
                ></p>                            
            </div>
            <div className="w-full mt-10">
                <button className="bg-purple-700 font-bold py-2 px-4 rounded-full text-white">Contactanos</button>
            </div>
        </div>
    )
}
