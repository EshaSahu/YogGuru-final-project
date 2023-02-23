import "./Navbar2.css"
import {useStreak} from "use-streak";

export default function Navbar() {
  const today = new Date();
  const { currentCount } = useStreak(localStorage, today);
    return (
      <nav className="navigation2">
          
        &nbsp;  &nbsp;  &nbsp;  
       
        <div
          className="navigation-menu2">
          {/* <ul>
            <li style={{padding:"0px 60px 0px 0px"}}>
              <a href="/home">Cure with Yoga</a>
              
            </li>
            <li style={{padding:"0px 60px 0px 0px"}}>
              <a href="/about">Practice</a>
              
            </li>
            <li style={{padding:"0px 60px 0px 0px"}}>
              <a href="/meditation">Meditation</a>
              
            </li>
          </ul> */}
        </div>

        <div>
      

      
      <div style={{ fontSize: "15px" }}>
      <p style={{fontSize:"20px", color: "white", padding:"12px 10px 0px 0px"}}>Current streak-   🔥 
        {currentCount} day
        {currentCount > 1 ? "s" : ""} </p>
      </div>
      
    </div>
      </nav>
    );
  }