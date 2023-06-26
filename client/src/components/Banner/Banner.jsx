import React from 'react'
import './Banner.scss'

const Banner = ({img}) => {
  return (
    <div className='banner'>
    
  <img src={img} alt="" />
    </div>
  )
}

export default Banner