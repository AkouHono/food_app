import HeroSection from "../components/HeroSection";
import ImproveSkill from "../components/ImproveSkill";
import QuoteSection from "../styles/partials/QuoteSection";
import ChiefSection from "../styles/partials/ChiefSession";


export default function Home(){
    return(
        <div>
         <HeroSection/>
         <ImproveSkill/>
         <QuoteSection/>
         <ChiefSection/>
        </div>
    )
}