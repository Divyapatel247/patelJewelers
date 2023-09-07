import React, { useEffect } from "react";
import "./Contact.scss";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
// import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  return (
    <>
<div className="header">
      <h2>#let's_talk</h2>     
      <p>LEAVE A MESSAGE, We love to hear from you! </p>     
</div>
<div className="contact-details">
   <div className="details">
    <span>GET IN TOUCH</span>
    <h2>visit one of our agency location or contact us today</h2>
    <h3>Head office</h3>
    <div>
        <li>
            {/* <i className="fal fa-map"></i> */}
            <p>247 your shooping mall,Nikol,Ahmedabad</p>
        </li>
        <li>
            {/* <i class="fal fa-envelope"></i> */}
            <p>contact@examlpe.com</p>
        </li>
        <li>
            {/* <i class="fal fa-phone-alt"></i> */}
            <p>+91 9054046469</p>
        </li>
        <li>
            {/* <i class="fal fa-clock"></i> */}
            <p>Monday to Saturday: 9.00am to 16.pm </p>
        </li>
    </div>
   </div>
   <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29368.893068052883!2d72.66610004136666!3d23.05636855648866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86d53c2ed683%3A0x161958a4f45e809a!2sNikol%2C%20Ahmedabad%2C%20Gujarat%20380038!5e0!3m2!1sen!2sin!4v1663236176302!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="abc" />
   </div>
</div>
<div className="form-details">
  <div className="form">
    <form action="">
      <span>LEAVE A MESSAGE</span>
      <h2>We love to hear from you</h2>
      <input type="text" placeholder="Your Name" />
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Subject" />
      <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
      <button>Submit</button>
    </form>
  </div>
  <div className="peoples">
    <div className="people">
      <img src="/img/logopj.png" alt="" />
      <p><span>Subham Patel</span>  Phone: +91 905 404 64 69 <br />Email: contact@example.com </p>
    </div>
    <div className="people">
      <img src="/img/logopj.png" alt="" />
      <p><span>Kush Patel</span>  Phone: +91 905 404 64 69 <br />Email: contact@example.com </p>
    </div>
    <div className="people">
      <img src="/img/logopj.png" alt="" />
      <p><span>Lenish Patel</span>  Phone: +91 905 404 64 69 <br />Email: contact@example.com </p>
    </div>
  </div>
</div>

    </>
  );
};

export default Contact;






// <div className="contact">
    //   <div className="wrapper">
    //     <span>BE IN TOUCH WITH US:</span>
    //     <div className="mail">
    //       <input type="text" placeholder="Enter your e-mail..." />
    //       <button>JOIN US</button>
    //     </div>
    //     <div className="icons">
    //       <FacebookIcon />
    //       <InstagramIcon />
    //       <GoogleIcon />
    //     </div>
    //   </div>
    // </div>