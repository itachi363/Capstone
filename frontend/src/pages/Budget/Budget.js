import React from "react";

const Budget = (props) => {
    return ( 
        <div>
            {props.subUser.map(junction => {
                return (
                    <div className="center">
                        <h3>Budget:</h3>
                        <div>Username: {junction.user.username}</div>
                        <div>You owe ${junction.subscription.payment_amount} this month.</div>
                    </div>
                )
            })} 
            <div className="center">
                <button onClick={props.refresh}>refresh</button>
            </div>
        </div>
     );
}
 
export default Budget;