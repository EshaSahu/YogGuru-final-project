import React from "react";
import {NavLink} from "react-router-dom";

function Level1Menu1(){
    return(
<>
{/* <NavLink to="/">About Us</NavLink> */}
<div  style={{padding: "450px 0px 0px 150px"}}>

   
    <button className="level1Menu1"type="button" class="btn btn-outline-dark">
    <NavLink to="/level1a">level1a1</NavLink>
    </button>
    
</div>

</>
    
    );
}
export default Level1Menu1;