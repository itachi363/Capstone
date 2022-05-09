import bokksuone from "../Images/bokksuone.jpg"
import "./Box.css"

const RegularBox = () => {
    return ( 
        <div>
            <img src={bokksuone} className="boxes"></img>
            <p>we reccomend the regular box.</p>
        </div>
     );
}
 
export default RegularBox;