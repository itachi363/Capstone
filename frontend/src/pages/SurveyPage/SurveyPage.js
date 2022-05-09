import React, {useState} from "react"
import { useNavigate, Link } from "react-router-dom";
import Toggle from "./Toggle";
import "./SurveyPage.css"
import "./script.js"

const SurveyPage = () => {
    // const navigate = useNavigate();

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     console.log(value)
    // }

    return ( 
        <form>
            <div className="center">
                <div>
                    <h2>
                        Which snackbox would you like to see?
                    </h2>
                </div>
                <div>
                    <p>Do you like sweet candy</p>
                    <input type="radio" id="sweet" name="fav_flavor" value="sweet"/>
                    <label for="sweet">Sweet</label> 
                </div>
                <div>
                    <p>Do you like seasonal candy</p>
                    <input type="radio" id="seasonal" name="fav_flavor" value="seasonal"/>
                    <label for="seasonal">Seasonal</label> 
                </div>
                <div>
                    <p>Do you like savory snacks</p>
                    <input type="radio" id="savory" name="fav_flavor" value="savory"/>
                    <label for="savory">Savory</label> 
                </div>
                <div>
                    <button>Submit</button>
                </div>
                <script src="script.js"></script>
            </div>
        </form>
     );
}
 
export default SurveyPage;