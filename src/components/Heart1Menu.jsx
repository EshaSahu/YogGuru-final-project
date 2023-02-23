import React from "react";
import {NavLink} from "react-router-dom";

function Heart1Menu(){
    return(
<>
{/* <NavLink to="/">About Us</NavLink> */}
<div  style={{padding: "30px 0px 0px 30px"}}>

   
    <button  className="level1Menu1"  type="button" class="btn btn-outline-dark">
    <NavLink to="/disease1" style={{fontWeight:"bolder"}}>Back</NavLink>
    </button>
    
</div>

</>
    
    );
}
export default Heart1Menu;