import Image from "next/image";
import ImagenDispositivo from "../components/ImagenDispositivos/ImagenDispositivo";
// import styles from './page.module.css'



export default function HomePage() {
    return (
        <main className="realtive flex w-full min-h-full flex-col items-center justify-between p-24">
                <section className="relative flex flex-col md:flex-row w-full h-full items-center justify-center">
                        <div className="flex flex-col w-full h-full items-center justify-start text-white">
                            <h1 className="text-7xl font-bold text-center">TECHNICODERS</h1>
                            <h2 className="text-3xl text-center">Agencia de Diseño y Marketing</h2>
                            <div className="mt-8" >
                                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>                            
                            </div>
                            <div className="flex flex-col w-full items-center justify-center mt-10">
                                <button className="bg-white text-black font-bold py-2 px-4 rounded-full">Contactanos</button>
                            </div>

                        </div>
                        <div className="flex flex-col w-full justify-center items-center">
                            <ImagenDispositivo />
                            {/* <img src="./dispositivos.svg" alt="TECHNICODERS" className={`${styles.logo} w-96 h-96`}/> */}
                        </div>
                </section>
        </main>
    )
}
