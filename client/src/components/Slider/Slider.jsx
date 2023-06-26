import React, { useEffect, useState } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "/img/slider/1.png",
        "/img/slider/2.jpg",
        "/img/3.jpg",
      ];

    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev-1)
    }
    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev+1)
    }

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % data.length);
      }, 5000); // Change image every 5 seconds (adjust this value as needed)
  
      return () => clearInterval(timer);
    }, [currentSlide, data.length]);

  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
     </div>
     {/* <div className='icons'> */}
        {/* <div className="icon" onClick={prevSlide}>
        <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
        <EastOutlinedIcon />
        </div> */}
     {/* </div> */}
    </div>
  )
}

export default Slider
