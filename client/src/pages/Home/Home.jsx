import React from 'react'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import "./Home.scss"
import Banner from '../../components/Banner/Banner'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Banner1 from '../../components/Banner1/Banner1'
import Landing from '../../components/Landing/Landing'
// import Contact from '../../components/Contactus/Contactus'

const Home = () => {
  return (
    <div className='home'>
      <Landing/>
      <Slider/>
      <Categories/>
      <Banner1/>
      <FeaturedProducts type="Featured"/>
      <Banner img="/img/b1.jpg"/>
      <FeaturedProducts type="Trending"/>
      <Banner img="/img/b2.jpg"/>
      {/* <Contact/> */}
    </div>
  )
}

export default Home
