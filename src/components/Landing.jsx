import React from "react";
import { Link } from "react-scroll";
import Img1 from "../imgs/diabetes.jpg";

const Landing = () => {
  return (
    <div className="section__landing " id="home">
      <div className="up__image">
        <div className="image">
          <img src={Img1} alt="" style={{width:"80%"}}/>
        </div>
      </div>
      <div className="content">
        <div className="box">
          <div className="text   pe-5 pb-3 fs-3 ">
            Now you can measure your blood sugar without fear and with high
            accuracy.
          </div>
          <div className="btn-box" >
          
             <Link to="features" className="btn btn-warning pe-4 ps-4 text-white"> Order Now</Link>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
