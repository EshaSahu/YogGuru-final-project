import React from "react";
import {NavLink} from "react-router-dom";

function Menu(){
    return(
<>

<div style={{padding: "50px 50px 0px 500px"}}>

<button type="button" class="btn btn-outline-dark">
<NavLink to="/heart1" style={{fontWeight:"bolder", fontColor: "black"}}>Start</NavLink>
</button>
</div>
</>
    
    );
}
export default Menu;