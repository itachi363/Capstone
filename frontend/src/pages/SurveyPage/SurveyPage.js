import React, {useState} from "react"
import { useNavigate, Link } from "react-router-dom";
import Toggle from "./Toggle";
import "./SurveyPage.css"

const SurveyPage = () => {
    const navigate = useNavigate();

    const [flavor, setFlavor] = useState('');

    const handleChange = (e) => {
        setFlavor(e.target.value);
    }

    const handleSubmit = (e) => {
        if(flavor == "sweet")
            navigate("/sweet")
        else {
            console.log(flavor)
        }
    }

    return ( 
        <form onSubmit={handleSubmit()}>
            <div className="center">
                <div>
                    <h2>
                        Which snackbox would you like to see?
                    </h2>
                </div>
                <div>
                    <p>Do you like sweet candy</p>
                    <input type="radio" id="sweet" onChange={handleChange} name="fav_flavor" value="sweet"/>
                    <label for="sweet">Sweet</label> 
                </div>
                <div>
                    <p>Do you like seasonal candy</p>
                    <input type="radio" id="seasonal" onChange={handleChange} name="fav_flavor" value="seasonal"/>
                    <label for="seasonal">Seasonal</label> 
                </div>
                <div>
                    <p>Do you like savory snacks</p>
                    <input type="radio" id="savory" onChange={handleChange} name="fav_flavor" value="savory"/>
                    <label for="savory">Savory</label> 
                </div>
                <div>
                    <p> your flavor is {flavor}</p>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
     );
}
 
export default SurveyPage;