import purchasebokksu from "../Images/purchasebokksu.jpg"
import ButtonWrapper from "../Paypal/PaypalM"
import "./PurchasePage.css"

const MediumPurchasePage = (props) => {
    return ( 
        <div>
            <div>
                <img src={purchasebokksu} className="boxes"></img>
            </div>
            {props.sizeHandler.map((entry) => {
                return(
                    <div className="center">
                        <h2>
                            You have selected: 
                        </h2>
                        <h3>
                            {entry.size} snacks
                        </h3>
                        <h3>
                            {entry.flavor} flavor
                        </h3>
                        <p>$30</p>
                        <div className="centerButton">
                            <ButtonWrapper />
                        </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default MediumPurchasePage;