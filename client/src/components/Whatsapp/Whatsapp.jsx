import React from 'react'
import "./Whatsapp.scss"
import { Link } from 'react-router-dom'
import BackToTopButton from '../Backtotop/Backtotop';

const Whatsapp = () => {
  return (

    <div className="whatsapp">
      <div className="uparrow">
      <BackToTopButton/>
      </div>
         <Link className='link' to='https://wa.me/qr/6FXKZWSKVSOYF1' target="_blank" >
      <img src="/img/R.png" alt="Social Media Icon" />
         </Link>
    </div>
  )
}

export default Whatsapp