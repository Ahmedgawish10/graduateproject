import React from 'react'
import "./scrollup.css";
import {Link} from "react-scroll"
const Scrollup = () => {
    window.addEventListener("scroll",()=>{
        const scrollUp=document.querySelector(".scrollup");
        if (window.scrollY>=200) {
            scrollUp.classList.add("show")
           
        }
        else{
            scrollUp.classList.remove("show")

        }

    })
   const Top=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
   }
    return (
        <div className="scrollup">
 <div onClick={Top}>
                
                <i className="uil uil-arrow-up"></i>
            </div>

        </div>
    )
}
export default Scrollup
