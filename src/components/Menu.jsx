import React from "react";
import {NavLink} from "react-router-dom";

function Menu(){
    return(
<>
{/* <NavLink to="/">About Us</NavLink> */}
<NavLink to="/disease1" style={{fontWeight:"bolder"}}>Start</NavLink>
</>
    
    );
}
export default Menu;