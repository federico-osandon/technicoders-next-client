import ImagenDispositivo from "../ImagenDispositivos/ImagenDispositivo.jsx";
import CarouselText from "./CarouselText.jsx";
import DescriptionText from "./DescriptionText.jsx";

export default function HeroSection() {
    return (
        <section className="relative flex flex-col md:flex-row w-full h-screen items-center justify-center px-2 pb-4 md:px-24">
            <div className="flex flex-col w-full h-full items-center justify-start text-purple-900">
                {/* <h1 className="text-4xl md:text-5xl 2xl:text-8xl font-bold text-center">TECHNICODERS</h1>
                <h2 className="text-xl md:text-3xl 2xl:text-5xl mt-3 text-center">Agencia de Diseño y Marketing</h2> */}
                <div className="flex w-[50%] 2xl:w-[60%] justify-start items-center">
                    <ImagenDispositivo />
                </div>
            </div>
                {/* <img src="./dispositivos.svg" alt="TECHNICODERS" className={`${styles.logo} w-96 h-96`}/> */}
            <CarouselText />
            <DescriptionText />
        </section>
    )
}
