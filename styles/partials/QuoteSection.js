import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"


export default function QuoteSection(){
    return(
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>Food is everything we ate. It's an extension of nationalist feeling, ethnic feeling. Your personnal history. Your province , your religion, your tribe, your grandma. It's inseperable from those from the get-go</p>
            <p className="quote-author">Anthony Bourdain</p>
        </div>
    )
}