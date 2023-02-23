import React from "react";
import {useStreak} from "use-streak";

function Streak(){
    const today=new Date()
    const {currentCount}=useStreak(localStorage, today)
    return(
        <div className="Streak">
            <h2>Streak Counter</h2>
            <div>
                <span style={{fontSize:"3rem"}} role="img" aria-label="fire emoji">
                🔥
                </span>
                <p style={{fontSize:"1.5rem"}}>{currentCount} days{currentCount> 1 ? "s" : ""}</p>
            </div>
        </div>
    );
}

export default Streak();