import React from "react";
import Marquee from "react-fast-marquee";
import "./MainHeading.css";
function MainHeading(){
    return(


        <div>




       <div className="container1" style={{display: "grid", gridTemplateColumns: "auto auto auto", gap: "10px",  backgroundColor: "#B5DFD1", padding: "0px 0px 500px 0px", height: "400px"}}>

    <div style={{flexDirection: "column", gridColumnStart:"1", gridColumnEnd:"2"}}>
        <img class="mainImage" src="images/image.png" alt="image1" /> 
    </div>


        <div>
             <h1 className="mainHeading" style={{fontFamily:"poppins", fontWeighht:"bold", color: "#10603A", alignContent: "right", display:"flex", direction:"row", fontSize:"105px", padding:"100px 100px 0px 20px"}}> MediYog</h1> 
        
             <p className="mainHeading" style={{fontFamily:"poppins", color: "#10603A", alignContent: "top", display:"flex", direction:"row", fontSize:"40px", padding:"0px 5px 5px 20px"}}> Breathe . Balance . Build</p>
             <p className="mainHeading" style={{fontFamily:"poppins", color: "#10603A", alignContent: "top", display:"flex", direction:"row", fontSize:"21px", padding:"0px 5px 5px 20px"}}> Uniting natural forces to cure the body and soul.</p> 
              
        </div>

     
       </div>
    

        <div>
       <Marquee speed={100} style={{backgroundColor:"white", fontSize:"20px", fontWeight:"bold", width:"100%", fontFamily:"poppins light"}}>
    Yoga is the perfect opportunity to be curious about who you are ● All this bringing of mind into a higher state of vibrations is included in one word in Yoga ● Yoga is the journey of the self, to the self, through the self ● 
    </Marquee>
    </div>
     


    
    </div>

    
    );
       
}

export default MainHeading;