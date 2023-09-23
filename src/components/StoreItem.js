import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
// import FormatCurrency from "./FormatCurrency";
import { FaShoppingCart } from "react-icons/fa";
import Img1 from "../imgs/diabetes.jpg";
import Img2 from "../imgs/sns2.png";
import Img3 from "../imgs/hand.png";

const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const [hide,sethide]=useState(1)
  const NumberTab=(index)=>{
    sethide(index);
 }
  return (
    <>
      <div className="cart" id="cart">
        <div className="box1">
          <div className="cart__img d-flex justify-content-center">
            <div className={hide===1?"img__hide active":"img__hide"}>
            <img 
              src={Img1}
              alt="f"
              style={{ width: "200px", height: "200px" }}
            />
            </div>
            {/* 222222222222222 */}
            <div className={hide===2?"img__hide active":"img__hide"}>
            <img 
              src={Img2}
              alt="f"
              style={{ width: "200px", height: "200px" }}
            />
            </div>
            {/* 333333333333333333 */}
            <div className={hide===3?"img__hide active":"img__hide"}>
            <img 
              src={Img3}
              alt="f"
              style={{ width: "200px", height: "200px" }}
            />
            </div>
          </div>
          <div className="cart__img-small pt-2 d-flex justify-content-center">
            <span>
              <img  className={hide===1?"img__small-active":""}
                src={Img1}
                alt="f"
                style={{ width: "60px" }}
                onClick={()=>{
                  NumberTab(1)
                }}
              />
            </span>
            <span>
              <img  className={hide===2?"img__small-active":""}
                src={Img2}
                alt="f"
                style={{ width: "60px" }}
                onClick={()=>{
                  NumberTab(2)
                }}
              />
            </span>
            <span>
              <img  className={hide===3?"img__small-active":""}
                src={Img3}
                alt="f"
                style={{ width: "60px" }}
                onClick={()=>{
                  NumberTab(3)
                }}
              />
            </span>
          </div>
        </div>
        <div className="box2">
          <h3>Measure Boold Product </h3>
          <div className="cart__text pe-5">
            Now you can order the product with discount for first 3 onces
          </div>

          <div className="cart__discount pt-2">
            <span className="price h5 pe-2">${price}.00</span>
            <span className="bg-warning p-1 text-danger rounded ms-1">50%</span>
            <div className="price text-muted pt-2 mb-4">${price + 115}.00</div>
          </div>
          <div className="add__cart">
            <div className="mt-auto">
              {quantity === 0 ? (
                <button
                  className="w-10 btn btn-warning text-white  pe-4 ps-4"
                  onClick={() => increaseCartQuantity(id)}
                >
                  <FaShoppingCart className="me-2"/>
                  Add To Cart
                </button>
              ) : (
                <div className="" style={{ gap: "0.5rem" }}>
                  <div
                    className="d-flex align-items-center mb-2"
                    style={{ gap: "0.5rem" }}
                  >
                    <Button
                      className="bg-warning border-0 text-white ps-3 pe-3"
                      onClick={() => decreaseCartQuantity(id)}
                    >
                      -
                    </Button>
                    <div>
                      <span className="fs-3">{quantity} in cart</span>
                    </div>
                    <Button
                      className="bg-warning border-0 "
                      onClick={() => increaseCartQuantity(id)}
                    >
                      +
                    </Button>
                  </div>
                  <button
                    className=" btn btn-danger text-white pe-5 ps-5"
                    onClick={() => removeFromCart(id)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreItem;
