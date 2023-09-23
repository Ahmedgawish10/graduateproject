import React from "react";
import Img1 from "../imgs/sns.png"
import Img2 from "../imgs/sns1.png"
import Img3 from "../imgs/hand.png"

function AboutProduct() {
  return (
    <div className="section__product" id="about">
      <h2
        style={{
          textAlign: "center",
          paddingTop: "100px",
          paddingBottom: "50px",
        }}
         >
        View of the Product
      </h2>
      <div className="product__content" >
        <div className="box1">
          <div className="product__image d-flex justify-content-center">
            <div className="circle bg-warning rounded-circle  d-flex justify-content-center align-items-center">
              <img
                src={Img1}
                alt=""
                style={{ width: "115px", height: "100px" }}
              />
            </div>
          </div>
          <div className="product__text">
            <h3 className="title text-center pt-2">What is it?</h3>
            <div className="text text-center">
              The (name product) Libre 14 day system is a continuous glucose
              monitoring (CGM) system consisting of (name app) app and a glucose
              sensor worn on the back of the upper arm.
            </div>
          </div>
        </div>
        {/* --------------------box-2----------------------- */}
        <div className="box1">
          <div className="product__image d-flex justify-content-center">
            <div className="circle bg-warning rounded-circle d-flex justify-content-center align-items-center">
              <img
                src={Img2}
                alt=""
                style={{ width: "150px", height: "150px" }}
              />
            </div>
          </div>
          <div className="product__text">
            <h3 className="title text-center pt-2">How does it work?</h3>
            <div className="text text-center">
              The sensor uses a thin, flexible filament inserted just under the
              skin to measure glucose levels every minute.
            </div>
          </div>
        </div>
        {/* -------------box-3------------------------------- */}
        <div className="box1">
          <div className="product__image d-flex justify-content-center">
            <div className="circle bg-warning rounded-circle   d-flex justify-content-center align-items-center">
              <img
                src={Img3}
                alt=""
                style={{ width: "150px", height: "150px" }}
              />
            </div>
          </div>
          <div className="product__text">
            <h3 className="title text-center pt-2">How do you use it?</h3>
            <div className="text text-center">
              Use your smartphone to connect to the glucose sensor with a one-second
              scan to read the ratio every once
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProduct;
