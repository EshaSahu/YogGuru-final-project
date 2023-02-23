import React from "react";
import Marquee from "react-fast-marquee";

function MarqueTag(){
    return(
<div>
       <Marquee speed={100} style={{backgroundColor:"white", fontSize:"20px", fontWeight:"bold", width:"100%"}}>
    {/* //    style={{backgroundColor:"white", fontSize:"20px", fontWeight:"bold", width:"100%", speed={20}}}> */}
    Yoga means addition of energy, strength and beauty to body, mind and soul.    It  is the dance of every cell with the music of every breath that creates inner serenity and harmony.    It is not a religion. It is a science, science of well-being, science of youthfulness, science of integrating body, mind, and soul.
    </Marquee>
    </div>
    )
}

export default MarqueTag;