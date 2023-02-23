import React from "react";
import {NavLink} from "react-router-dom";

function Level2Menu1(){
    return(
<>
{/* <NavLink to="/">About Us</NavLink> */}
<div  style={{padding: "450px 0px 0px 150px"}}>

    
    <button className="level1Menu1"type="button" class="btn btn-outline-dark">
    <NavLink to="/level2a">level2a1</NavLink>
    </button>
</div>

</>
    
    );
}
export default Level2Menu1;