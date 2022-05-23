import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import "./SurveyPage.css"

const SurveyPage = () => {
    const navigate = useNavigate();

    const [flavor, setFlavor] = useState('');

    function handleSubmit(){
        if(flavor == "sweet") {
            navigate("/sweet")
        }
        else if(flavor == "seasonal") {
            navigate("/seasonal")
        }
        else if(flavor == "savory") {
            navigate("/savory")
        }
        else {
            console.log(flavor)
        }
    }

    const handleChange = (e) => {
        setFlavor(e.target.value);
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <div className="center">
                <div>
                    <h2>
                        Which snackbox would you like to see?
                    </h2>
                </div>
                <div>
                    <p>Do you like sweet snacks.</p>
                    <input type="radio" id="sweet" onChange={handleChange} name="fav_flavor" value="sweet"/>
                    <label for="sweet">Sweet</label> 
                </div>
                <div>
                    <p>Do you like seasonal snacks.</p>
                    <input type="radio" id="seasonal" onChange={handleChange} name="fav_flavor" value="seasonal"/>
                    <label for="seasonal">Seasonal</label> 
                </div>
                <div>
                    <p>Do you like savory snacks.</p>
                    <input type="radio" id="savory" onChange={handleChange} name="fav_flavor" value="savory"/>
                    <label for="savory">Savory</label> 
                </div>
                <div>
                    <button type="submit" className="spin">Submit</button>
                </div>
            </div>
        </form>
     );
}
 
export default SurveyPage;