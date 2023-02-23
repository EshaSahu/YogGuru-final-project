import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


function AboutUs(){
    return(
<div>
    <Navbar />
    <div styles={{align:"center"}}>
    <img src="images/about.png" alt="aboutUs" height="800px"/>
    </div>
    
    <Footer />
</div>
    );
}

export default AboutUs;