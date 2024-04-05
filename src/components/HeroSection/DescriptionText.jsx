import styles from './carousel.module.css'
export default function DescriptionText() {
    return (
        <div className="absolute bottom-10 w-[90%] h-full overflow-hidden flex flex-col justify-end items-center text-center text-purple-900 font-bold z-50">
            <div className="mt-[-10%] 2xl:mt-8">
                <p className={`${styles.typingText} text-md md:text-2xl`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>                            
            </div>
            <div className="w-full mt-10">
                <button className="bg-purple-700 font-bold py-2 px-4 rounded-full text-white">Contactanos</button>
            </div>
        </div>
    )
}
