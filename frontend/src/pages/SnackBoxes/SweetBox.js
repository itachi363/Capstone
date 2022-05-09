import bokksuthree from "../Images/bokksuthree.jpg"
import "./Box.css"

const SweetBox = () => {
    return ( 
        <div>
            <img src={bokksuthree} className="boxes"></img>
            <p>We reccomend the sweet box.</p>
        </div>
     );
}
 
export default SweetBox;