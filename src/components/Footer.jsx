import React from 'react'
import "./footer.css"
function Footer() {
  return (
<div className='footer bg-dark'>
<div className="part-two-footer container "   >
<div className="container">
  <div className="two-section">
  <div className="company">
    <div className="one">
      <h2>company</h2>
      <p>About us</p>
      <p>Team</p>
      <p>Careers</p>
      <p>Blog</p>
    </div>
    <div class="one">
      <h2>Contact</h2>
      <p>Help & Support</p>
      <p>Partner with us </p>
      <p>Ride with us</p>
      
    </div>
    <div class="one">
      <h2>Legal</h2>
      <p> Terms & Conditions</p>
      <p>Refund & Cancellation</p>
      <p>Privacy Policy</p>
      <p>Cookie Policy</p>
    </div>
  </div>

<div className="follow-us">
<h2>follow us</h2>
<div className="icon-social">
  <span></span>
  <span></span>
  <span></span>
</div>
<p>Receive exclusive offers in your mailbox</p>

<div className="form-up">
<div className="form-center">
<form action="#">
  <div className="align" >
 <div><input type="email" name="" placeholder="Enter Your Email" id=""/></div> 
  
<div className="subscribe"> 
  <div className="sub"><a href="#" className='text-white'>subscribe </a></div>
</div>
</div>
</form>
</div>

</div>


</div>
</div>
</div>
</div>

<div class="hero-footer1" >
  <div class="container" >
    <div  class="hero-footer">

  <div class="left">
    All rights Reserved &#0174; Sokary Company,2023
  </div>
  <div class="right">Made With BY Sokary Team </div>
</div>
</div>
</div>
</div>


    )
}

export default Footer