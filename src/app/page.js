import BudgetSection from "@/components/BudgetSection/BudgetSection"
import HeroSection from "../components/HeroSection/HeroSection"
import ProjectSection from "../components/ProjectSection/ProjectSection"
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection"
// import styles from './page.module.css'



export default function HomePage() {
    return (
        <main className="relative flex w-full h-full flex-col items-center">
            <HeroSection />
            <ProjectSection />
            <BudgetSection />
            <ContactUsSection />
        </main>
    )
}
