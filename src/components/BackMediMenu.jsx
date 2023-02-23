import React from "react";
import {NavLink} from "react-router-dom";

function BackMediMenu(){
    return(
<>
{/* <NavLink to="/">About Us</NavLink> */}
<div  style={{padding: "30px 0px 0px 30px"}}>

<button type="button" class="btn btn-outline-dark">
    <NavLink to="/" style={{fontWeight:"bolder"}}>Back</NavLink>
    </button>
</div>

</>
    
    );
}
export default BackMediMenu;