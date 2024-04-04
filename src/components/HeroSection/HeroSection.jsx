import ImagenDispositivo from "../ImagenDispositivos/ImagenDispositivo.jsx";

export default function HeroSection() {
    return (
        <section className="relative flex flex-col md:flex-row w-full h-screen items-center justify-center px-2 pt-56 md:pt-24 2xl:pt-60 pb-4 md:px-24">
            <div className="flex flex-col w-full h-full md:mr-8 items-center justify-start text-white">
                <h1 className="text-4xl md:text-5xl 2xl:text-8xl font-bold text-center">TECHNICODERS</h1>
                <h2 className="text-xl md:text-3xl 2xl:text-5xl mt-3 text-center">Agencia de Diseño y Marketing</h2>
                <div className="mt-8">
                    <p className="text-md md:text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>                            
                </div>
                <div className="flex flex-col w-full items-center justify-center mt-10">
                    <button className="bg-white text-black font-bold py-2 px-4 rounded-full">Contactanos</button>
                </div>
            </div>
            <div className="flex flex-col w-full h-full justify-start items-center">
                <ImagenDispositivo />
                {/* <img src="./dispositivos.svg" alt="TECHNICODERS" className={`${styles.logo} w-96 h-96`}/> */}
            </div>
        </section>
    )
}
