import bokksutwo from "../Images/bokksutwo.jpg"
import "./Box.css"

const SavoryBox = () => {
    return ( 
        <div>
            <img src={bokksutwo} className="boxes"></img>
            <p>we reccomend the savory box.</p>
        </div>
     );
}
 
export default SavoryBox;