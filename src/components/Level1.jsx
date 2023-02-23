// import React from "react"
// function Level1(){
//     return(
//   <h1>Level1</h1>      
//     );
// }
// export default Level1;

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Level1Menu1 from "./Level1Menu1";
import Level1Menu2 from "./Level1Menu2";
import Level1Menu3 from "./Level1Menu3";
import Level1Menu4 from "./Level1Menu4";




function Level1(){
    return(
<div class="level1">

    <Navbar />

    <div className= "thirdStairs1">
    
<div>
    <br></br>
    <br></br>
    <br></br>
    <div>
    
    <Level1Menu1 /> 
    <br></br>
  <Level1Menu2 /> 
  <br></br>
  <Level1Menu3 /> 
  <br></br>
  <Level1Menu4 /> 
  <br></br>
      
       
    </div>
    
  
</div>
       

      </div>
        
        <div>
            
        <Footer />
        </div>
       
        
</div>
);

}
export default Level1;