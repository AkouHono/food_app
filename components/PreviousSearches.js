
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{faSearch} from "@fortawesome/free-solid-svg-icons"



export default function PreviousSearch(){
    const searches = ['pizza', 'burger','cookies','biriyani','ice cream','juice', 'salad', 'pizza','shawarma']
    return(
        <div className="previous-searchers section">
        <h2> Previous Searches </h2>
        <div className="previous-searchers-container">
            {searches.map((search , index) => (<div key={index}  style={{animationDelay: index * .1 + "s" }} className="search-item">
                {search}
            </div>))}
        </div>
        <div className="search-box">
            <input type="text" placeholder="Search ..."/>
            <button className="btn">
                <FontAwesomeIcon icon={faSearch}/>
            </button>

        </div>

       </div>
    )
}