import React from "react"

const Toggle = ({onChange}) => (
    <div>
        <input type="radio" onChange={onChange}/>
        <span />
    </div>
);

export default Toggle;