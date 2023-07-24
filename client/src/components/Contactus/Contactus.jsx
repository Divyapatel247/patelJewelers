import React from "react";
import "./Contactus.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
// import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
// import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
         <span>Follow us on </span>
         {/* <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div> */}
        <div className="icons">
           <FacebookIcon />
           <Link className='link' to='https://chat.openai.com/' target="_blank">
         <InstagramIcon/>
           </Link>
      
          <GoogleIcon />
         </div>
       </div>
     </div>
  );
};

export default Contact;