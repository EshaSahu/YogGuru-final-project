import React from "react";
import Navbar from "./Navbar";
import MainHeading from "./MainHeading";
import Navbar2 from "./Navbar2";
import Avatar from "./Avatar";



import Footer from "./Footer";
// import "../styles.css";
import Menu from "./Menu";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import Menu5 from "./Menu5";






function Home(){
    return(
    <div>
        <Navbar />
{/*         
        <Streak /> */}
          <MainHeading />
  
          <Navbar2 />
  
 
   <div class="second">
  <br></br>
  <br></br>
  <br></br>
  <table>
  
    <tr>
      <td style={{padding:"0px 0px 0px 190px"}}>
      <Avatar img="images/girl1.png" /> 
      </td>
      <td style={{padding:"0px 0px 0px 220px"}}>
      <Avatar img="images/girl2.png" /> 
      </td>
      <td style={{padding:"0px 0px 0px 130px"}}>
      <Avatar img="images/girl3.png" /> 
      </td>
    </tr>
  
    <tr>
      <td style={{padding:"0px 0px 0px 50px"}}>
       <p className="c1">Breathe is the bridge which  connects life to consciousness,<br></br> &nbsp; &nbsp; which unites your body to your thoughts. One can use<br></br> &nbsp; &nbsp; &nbsp;breath as the means to take hold of your mind again.</p>
      </td>
      <td style={{padding:"0px 50px 0px 70px"}}>
        <p className="c1">In movement there is balance. In balance there is movement.<br></br>&nbsp;  Yoga is all about balance. Within and without. Above and <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;below. Front and behind. In and out.</p>
      </td>
      <td>
        <p className="c1">Yoga is a powerful vehicle for change. As you build strength <br></br>&nbsp; &nbsp;you start to believe in your own potential and your mind <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; gets stronger with time.</p>
      </td>
    </tr>
  </table>
  
  <table>
    <tr>
      <td style={{width:"400px"}}>

       <tr>
       <div class="abc">
        <div class="row">
        <div class="column">
        <div className="practice">
        <div><h2 style={{fontSize:"30px", fontWeight:"bolder"}}>MEDITATION</h2></div>
            <a href="Meditation"><img src="images/meditation.png" alt="meditation" width={300} height={300}/></a>
           
            
            </div>
        
          </div>
        </div>
       </div>


       </tr>

          <tr>
        <div class="abc">
      <div class="row">
          <div class="column">
          
           
            <div className="practice" style={{fontSize:"200px"}}><h2 style={{fontSize:"30px", fontWeight:"bolder"}}>PRACTICE</h2></div>
            <div className="practice">
              <a href="Level1">
                <img src="images/level1.png" alt="level1" width={300} height={100}/></a></div>
          
            <br></br>
           
            <div className="practice">
            <a href="Level2"><img src="images/level2.png" alt="level2" width={300} height={100}/></a>
            </div>
            <br></br>
           
            <div className="practice"><img src="images/level3.png" alt="level3" width={300} height={100}/></div>
            <br></br>
            
            <div className="practice"><img src="images/level4.png" alt="level4" width={300} height={100}/></div>
            <br></br>
           
            <div className="practice"><img src="images/level5.png" alt="level5" width={300} height={100}/></div>
          
          </div>
          </div>
          </div>
          </tr>
      </td>
  
      <td style={{width:"1500px"}}>
      <div class="abc">
      <div class="row">
          <div class="column">
  
          
            <div className="disease"><h1 style={{fontSize:"50px", fontWeight:"bolder"}}>CURE WITH YOGA</h1></div>
            
            <table>
              <tr >
                <td style={{padding: "0px 50px 0px 40px"}} >
                <div className="practice"><img src="images/exercise1.png" alt="level1" width={170} height={200}/></div>
                </td>
                <td style={{padding: "0px 50px 0px 0px"}}>
                  <tr style={{fontSize:"30px", fontWeight:"bolder"}}>Healthy heart, healthy you!</tr>
                  <tr style={{fontSize:"20px"}}>For a long time now, medical experts have suggested regular practice of yoga for heart problems. Since, it is known to relax the mind and body, yoga is often seen as the ideal solution to reduce stress, anxiety and depression.</tr>
                  
                  <button type="button" class="btn btn-outline-dark">
                  <Menu />
                    </button>
               
                 
                  
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td style={{padding: "0px 50px 0px 40px"}}>
                <div className="practice"><img src="images/exercise3.png" alt="level1" width={170} height={150}/></div>
                </td>
                <td style={{padding: "0px 50px 0px 0px"}}>
                  <tr style={{fontSize:"30px", fontWeight:"bolder"}}>Inhale happiness, exhale worries!</tr>
                  <tr style={{fontSize:"20px"}}>Regularly practicing yoga may help individuals with asthma by reducing the severity of their symptoms. Although yoga is not a first-line treatment for asthma, it can be part of a comprehensive treatment plan. Certain yoga poses can manage symptoms by reducing stress levels, opening the chest, and encouraging deep breathing</tr>
                  <button type="button" class="btn btn-outline-dark">
                  <Menu3 />
                  </button>
                 
                </td>
              </tr>
            </table>
            <br></br>
            <br></br>
            <table>
              <tr>
                <td style={{padding: "0px 50px 0px 40px"}}>
                <div className="practice"><img src="images/exercise2.png" alt="level1" width={170} height={150}/></div>
                </td>
                <td style={{padding: "0px 50px 0px 0px"}}>
                  <tr style={{fontSize:"30px", fontWeight:"bolder"}}>Be sweet, not diabetic!-</tr>
                  <tr style={{fontSize:"20px"}}>Fortunately, therapies like naturopathy and yoga can help achieve normal blood sugar levels. Naturopathy and yoga may contribute to controlling the condition, as well as reduce side effects and the need for medications or drugs, by providing specific dietary practices, physical activity, and stress reduction.</tr>
                  <button type="button" class="btn btn-outline-dark">
                  <Menu2 />
                  </button>
                </td>
              </tr>
            </table>
            <br></br>
            <br></br>
            <table>
              <tr>
                <td style={{padding: "0px 50px 0px 40px"}}>
                <div className="practice"><img src="images/exercise4.png" alt="level1" width={170} height={150}/></div>
                </td>
                <td style={{padding: "0px 50px 0px 0px"}}>
                  <tr style={{fontSize:"30px", fontWeight:"bolder"}}>Inhale happiness, exhale worries!</tr>
                  <tr style={{fontSize:"20px"}}>Apart from mindful eating and identifying the food items that cause digestive issues, it is important to incorporate Yoga asanas into your fitness routine to have a positive impact on digestion and gut health. This is because Yoga poses help to stretch the muscles, massage the internal organs and stimulate the digestive system.</tr>
                  <button type="button" class="btn btn-outline-dark">
                  <Menu4 />
                  </button>
                </td>
              </tr>
            </table>
            <br></br>
            <br></br>
            <table>
              <tr>
                <td style={{padding: "0px 50px 0px 40px"}}>
                <div className="practice"><img src="images/exercise5.png" alt="level1" width={170} height={150}/></div>
                </td>
                <td style={{padding: "0px 50px 0px 0px"}}>
                  <tr style={{fontSize:"30px", fontWeight:"bolder"}}>Inhale happiness, exhale worries!</tr>
                  <tr style={{fontSize:"20px"}}>Yoga asanas involve breathing consciously and deeply while synchronizing your body movements. They can help control blood pressure naturally, primarily by relieving stress. Yoga gives positive energy to the body and mind. It makes you happier and more hopeful in life. In the long run, this helps to regulate blood pressure levels.</tr>
                  <button type="button" class="btn btn-outline-dark">
                  <Menu5 />
                  </button>
</td>
              </tr>
            </table>
            <br></br>
            
          </div>
          </div>
          </div>
      </td>
  
    </tr>
  </table>
  
     
        </div> 
   
        <Footer />
    
    
      </div>);
  }
  export default Home;