import styles from './carousel.module.css'

export default function CarouselText() {
    return (
        <div className="absolute flex overflow-hidden w-full h-full text-9xl items-center text-orange-600 font-extrabold mt-[-5%]">
            <div className={`${styles.slide}`}>TECHNICODERS - AGENCIA DE DISEÑO Y MARKETING.</div>
            <div className={`${styles.slide}`}>TECHNICODERS - AGENCIA DE DISEÑO Y MARKETING.</div>
            <div className={`${styles.slide}`}>TECHNICODERS - AGENCIA DE DISEÑO Y MARKETING.</div>                       
        </div>
    )
}
