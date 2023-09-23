import React, { useState } from "react";
import {Link} from "react-scroll"
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "bootstrap/dist/css/bootstrap.css";
import { FaBars , FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  const [hide,open]=useState(0);
  return (
    <div  className="bg-white shadow-sm mb-3 position-fixed w-100 z-3 " id="hom">
      <div className=" nav container d-flex justify-content-between pb-2 pt-2 ">     
                <div className="d-flex align-items-center">
                  <a href="#" className="h6 mb-0 logo">   Measure Diabetes</a>
      </div>
        <div className={hide===!0?`${"uil uil-times menu"}`:`${"uil uil-apps menu"}`} onClick={()=>{
          open(!hide)
        }}>
 
    </div>
        <div className={hide ? "apear":"hide"}>
          <div className=" apear__box w-100 d-flex align-items-center">
          <div className="links">
        
          <Link to="home" className=" pe-3 h6 ">  Home</Link> 
            <Link to="about" className=" pe-3 h6">About</Link> 
            <Link to="contact" className=" pe-3 h6">Contact</Link> 
            <Link to="features" className=" pe-3 h6">Features</Link> 
          </div>
        {cartQuantity >= 0 && (
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-warning"
            className="cart__number rounded-circle"
            onClick={openCart}
          >
          <FaShoppingCart/>
            <div
              className="rounded-circle bg-warning d-flex justify-content-center align-item-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.6rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        
        )}
        </div>
       
        </div>

      </div>

    </div>
  );
};

export default Navbar;
