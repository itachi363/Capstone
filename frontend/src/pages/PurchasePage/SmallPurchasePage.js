import purchasebokksu from "../Images/purchasebokksu.jpg"
import React from "react"
import ButtonWrapper from "../Paypal/PaypalS"
import "./PurchasePage.css"

const SmallPurchasePage = (props) => {

    return ( 
        <div>
            <div>
                <img src={purchasebokksu} className="boxes" alt="purchase"></img>
            </div>
            {props.sizeHandler.map((entry) => {
                return(
                    <div className="center">
                        <form>
                            <h2>
                                You have selected: 
                            </h2>
                            <h3>
                                {entry.size} snacks
                            </h3>
                            <h3>
                                {entry.flavor} flavor
                            </h3>
                            <p>$20</p>
                            <div className="centerButton">
                                <ButtonWrapper />
                            </div>
                        </form>
                    </div>
                )
            })}
        </div>
     );
}
 
export default SmallPurchasePage;