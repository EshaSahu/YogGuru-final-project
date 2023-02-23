import React from "react";
// import Timer from "./Timer";
import Avatar2 from "./Avatar2";
import BackMediMenu from "./BackMediMenu";

function Meditation(){
    return(
        <div className="meditation">
         
         <BackMediMenu />
           
        <div style={{padding:"50px 0px 50px 730px"}}>
            
        <div>
        <h1 style={{fontWeight:"bolder", padding:"0px 0px 40px 0px"}}>Breathe In, Breathe Out</h1>
        </div>
        <div >
        
        <Avatar2 style={{padding:"100px 0px 0px 0px"}}img="images/circlemedi.jpg" />

        </div>
        </div>
        
        

       {/* <div style={{padding:"0px 0px 0px 145px"}}>
       </div> */}
       {/* <Timer /> */}
    
    
      <div style={{padding: "100px 150px 70px 300px"}}>
      <span style={{padding: "0px 200px 0px 0px"}}>
       <audio controls  >
  <source src="horse.ogg" type="audio/ogg" />
  <source src="./audio/medi1.mp3" type="audio/mpeg" />
Your browser does not support the audio element.
</audio>
</span>
<span style={{padding: "0px 200px 0px 0px"}}>
<audio controls >
  <source src="horse.ogg" type="audio/ogg" />
  <source src="./audio/medi2.mp3" type="audio/mpeg" />
Your browser does not support the audio element.
</audio>
</span>
<span style={{padding: "0px 0px 0px 0px"}}>
<audio controls >
  <source src="horse.ogg" type="audio/ogg" />
  <source src="./audio/medi3.mp3" type="audio/mpeg" />
Your browser does not support the audio element.
</audio>
</span>
</div>



       </div>
        
        
    );
}

export default Meditation;