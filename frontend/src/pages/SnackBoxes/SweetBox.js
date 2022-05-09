import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import bokksuthree from "../Images/bokksuthree.jpg"
import "./Box.css"

const SweetBox = () => {
    const navigate = useNavigate();

    const [size, setSize] = useState('');

    function handleSubmit(){
        if(size == "16") {
            console.log(size)
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
            <div>
                <img src={bokksuthree} className="boxes"></img>
                <p>We recommend the sweet box.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <h2>
                            Which snackbox would you like?
                        </h2>
                    </div>
                    <div>
                        <p>Do you want 16 snacks?</p>
                        <input type="radio" id="16" onChange={handleChange} name="box_size" value="16"/>
                        <label for="sweet">16 snacks</label> 
                    </div>
                    <div>
                        <p>Do you want 20 snacks?</p>
                        <input type="radio" id="20" onChange={handleChange} name="box_size" value="20"/>
                        <label for="seasonal">20 snacks</label> 
                    </div>
                    <div>
                        <p>Do you want 24 snacks?</p>
                        <input type="radio" id="24" onChange={handleChange} name="box_size" value="24"/>
                        <label for="savory">24 snacks</label> 
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div> 
     );
}
 
export default SweetBox;