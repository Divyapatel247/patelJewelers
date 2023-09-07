import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

 const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
       
       
        <div className="item">
        <h1>Best Jewellery Shop in USA</h1>
        <span>The Jewellery collection that reflects its classic cuts, uniqueness, and exquisite design, offered with promise of trust and quality. Customer's satisfaction is paramount to our successful enterprise. To buy gold jewelry at best prices, contact us today!</span>
        
        <div className='logo'>
          <div className='pic'>
       <a href="#"><img src="/img/logopj.png" alt="" /></a>
          </div>
          <div className="name">
      <a href="#"><img src="/img/logoname.png" alt="" /></a>

          </div>


      </div>
      <h2>Opening Hours: <span>MONDAY TO SATURDAY</span></h2>
      <h2>Call: <span>+91 9054046469</span></h2>
      <h2>Email: <span>PatelJewelers@gmail.com</span></h2>
        </div> 
        <Link to='/privacypolicy' >
          <h4 className="policy">
          Privacy policy
          </h4>
          </Link>
      </div>
      
      <div className="bottom">
      <span className="logo">PatelJewellers</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
         
       
      </div>
    </div>
  )
}

export default Footer
