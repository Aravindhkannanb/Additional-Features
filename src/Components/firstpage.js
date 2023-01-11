import React from "react";
import './firstpage.css';
import Wallet from './animation.json';
import Lottie from "lottie-react";
const first=()=>{
    return (
        
        <div >
            <div >
     <Lottie animationData={Wallet} className="lottie"/>
    
     </div>
        </div>
  
   
       
    )
}
export default first;