import bokksutwo from "../Images/bokksutwo.jpg"
import "./Box.css"

const SeasonalBox = () => {
    return ( 
        <div>
            <img src={bokksutwo} className="boxes"></img>
            <p>we recommend the regular box.</p>
        </div>
     );
}
 
export default SeasonalBox;