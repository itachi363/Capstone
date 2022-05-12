import React from "react";

const Budget = (props) => {
    return ( 
        <div>
            <p>test</p>
            {props.subUser.map(junction => {
                return (
                    <tr>
                        <td>{junction.user.username}</td>
                        <td>{junction.subscription.subscription}</td>
                    </tr>
                )
            })} 
            <button onClick={props.refresh}>refresh</button>
        </div>
     );
}
 
export default Budget;