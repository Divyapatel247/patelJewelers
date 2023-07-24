import React from 'react'
import "./Whatsapp.scss"
import { Link } from 'react-router-dom'

const Whatsapp = () => {
  return (
    <div className="whatsapp">
         <Link className='link' to='https://wa.me/qr/6FXKZWSKVSOYF1' target="_blank" >
      <img src="/img/R.png" alt="Social Media Icon" />
         </Link>
    </div>
  )
}

export default Whatsapp