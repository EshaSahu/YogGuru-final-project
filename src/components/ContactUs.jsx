import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContactUs(){
    return(
<div className="contact">
        <Navbar />
        <div className= "contactbox" style={{padding: "120px 450px 0px 400px"}}>
        <div class="abc">
        <div class="row">
        <div class="column">
<h1 className="Heading">Contact Us!</h1>
<p className="Heading1">Get in touch and let us know how we can help you.</p>

<p className="Heading2">For support or any queries- <br></br>
<br></br>



<div><img className="map" src="images/email.png" alt="email" height={60} width={60}/>
<p>EMAIL: <br></br><a href="mailto:Esha2010002@akgec.ac.in">Esha2010002@akgec.ac.in </a></p>
</div>
<br></br>
<div><img className="map" src="images/map.png" alt="map" height={50} width={50}/>
<p>ADDRESS: <br></br>B18/01 Walk Street, Delhi-110091</p>
</div>
<br></br>

<div>
    <img className="map" src="images/telephone.png" alt="tel" height={60} width={60}/>
<p>PHONE: <br></br>+919765435678</p>
</div>

</p>

            
            </div>
            </div>
            </div>
            </div> 
            



        <Footer />    
</div>            
    );
}

export default ContactUs;