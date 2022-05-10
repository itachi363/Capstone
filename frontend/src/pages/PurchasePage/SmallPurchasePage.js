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
            
            <script src="https://www.paypal.com/sdk/js?client-id=AYmNEAqrwgM0UkX46-dQMK5k4tumyOjNo8zcMtU-Fkp4kg7Kk9L6RlwFY9HpGszh33MTL9XSRBMd_A-d"></script>

        </div>
     );
}
 
export default SmallPurchasePage;