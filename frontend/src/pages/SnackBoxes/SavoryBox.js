import bokksuone from "../Images/bokksuone.jpg"
import "./Box.css"

const SavoryBox = () => {
    return ( 
        <div>
            <img src={bokksuone} className="boxes"></img>
            <p>we recommend the savory box.</p>
        </div>
     );
}
 
export default SavoryBox;