import purchasebokksu from "../Images/purchasebokksu.jpg"

const SmallPurchasePage = (props) => {
    return ( 
        <div>
            <div>
                <img src={purchasebokksu} className="boxes"></img>
            </div>
            {props.sizeHandler.map((entry) => {
                return(
                    <div>
                        <h3>
                            {entry.size}
                        </h3>
                        <h3>
                            {entry.flavor}
                        </h3>
                        <p>$20</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default SmallPurchasePage;