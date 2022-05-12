import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import bokksuone from "../Images/bokksuone.jpg"
import "./Box.css"

const SavoryBox = (props) => {
    const navigate = useNavigate();

    const [size, setSize] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        let newEntry = {
            size: size,
            flavor: "Savory"
        }
        props.addSize(newEntry)
        if(size == "16") {
            navigate("/purchaseS")
        }
        else if(size == "20") {
            navigate("/purchaseM")
        }
        else if(size == "24") {
            navigate("/purchaseL")
        }
        else {
            console.log(size)
        }
    }

    const handleChange = (e) => {
        setSize(e.target.value);
    }
    return ( 
        <div>
            <img src={bokksuone} className="boxes"></img>
            <p className="center">we recommend the savory box.</p>
            <form onSubmit={handleSubmit}>
                <div className="center">
                    <div>
                        <h2>
                            Which snackbox would you like?
                        </h2>
                    </div>
                    <div>
                        <p>Do you want 16 snacks?</p>
                        <input type="radio" id="16" onChange={handleChange} name="box_size" value="16"/>
                        <label for="16">16 snacks</label> 
                    </div>
                    <div>
                        <p>Do you want 20 snacks?</p>
                        <input type="radio" id="20" onChange={handleChange} name="box_size" value="20"/>
                        <label for="20">20 snacks</label> 
                    </div>
                    <div>
                        <p>Do you want 24 snacks?</p>
                        <input type="radio" id="24" onChange={handleChange} name="box_size" value="24"/>
                        <label for="24">24 snacks</label> 
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default SavoryBox;