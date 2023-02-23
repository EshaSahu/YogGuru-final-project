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
import Level2Menu1 from "./Level2Menu1";
import Level2Menu2 from "./Level2Menu2";
import Level2Menu3 from "./Level2Menu3";
import Level2Menu4 from "./Level2Menu4";

// import BootstrapCarouselComponent from './bootstrap-carousel.component';


function Level2(){
    return(
<div class="level2">

    <Navbar />

    <div className= "thirdStairs1">
    
<div>
    <br></br>
    <br></br>
    <br></br>
    <div>
      {/* <div class="box">
      <img src="images/stairs1.png" alt="stairs" />
      </div> */}
    <Level2Menu1 /> 
    <br></br>
  <Level2Menu2 />
  <br></br> 
  <Level2Menu3 />
  <br></br> 
  <Level2Menu4 /> 
      <br></br>
       
    </div>
    
  
</div>
       
{/* <h1>.</h1><h1>.</h1>     <h1>.</h1>
<h1>.      </h1> 
<h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1><h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> <h1>.</h1> */}
      </div>
        
        <div>
            
        <Footer />
        </div>
       
        
</div>
);

}
export default Level2;