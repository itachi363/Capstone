import purchasebokksu from "../Images/purchasebokksu.jpg"
import PaypalCheckoutButton from "../../components/Paypal/Paypal";

const SmallPurchasePage = (props) => {
    const product = {
        description: "design+Code React Hooks Course",
        price: 20
    }


    return ( 
        <div>
            <div>
                <img src={purchasebokksu} className="boxes"></img>
            </div>
            {props.sizeHandler.map((entry) => {
                return(
                    <div>
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
                        
                    </div>
                )
            })}
            
            <div className="paypal-button-container">
                <PaypalCheckoutButton product={product} />
            </div>
        </div>
     );
}
 
export default SmallPurchasePage;