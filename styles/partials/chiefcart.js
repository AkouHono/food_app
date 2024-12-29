import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"



export default function ChiefCard({chief}){
    return(
        <div className="chief card">
            
                <img src="/img/top-chief/chef.jpg" alt=""/>
           
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipes-count">Recipes: <b>{chief.recipescount}</b></p>
                <p className="chief-cuisine">Cuisines: <b>{chief.cuisine}</b></p>
                <p className="chief-icon">
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                </p>
            </div>
            
        </div>
    )
}