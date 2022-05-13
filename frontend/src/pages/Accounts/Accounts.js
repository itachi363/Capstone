const Account = (props) => {

    let subUser = props.subUserAll.map((user) => {
        return user.user, user.subscription.payment_amount
    })
    console.log(subUser)



    return ( 
        <div className="center">
            <p>Total profits: </p>
            <div>
                {subUser.reduce((total, currentValue) => {
                    return total + currentValue
                })}
            </div>
        </div>
     );
}
 
export default Account;