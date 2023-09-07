import React, { useRef, useState } from 'react';
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import SearchIcon from "@mui/icons-material/Search";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

 const Navbar = () => {
   const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


  return (
<div className='navbar'>
      <div className='left'>
       <a href="#"><img src="/img/logopj.png" alt="" /></a>
      </div>
      <div className='center'>
      <a href="#"><img src="/img/logoname.png" alt="" /></a>
      {/* <h2 className="logo">PatelJewellers</h2> */}
      </div>
      <div className="menu">
      <div className='right' ref={navRef} >
          <div className="menuIcon closeIcon " >
          <CloseIcon onClick={showNavbar}/>
          </div>
          <div className="item" onClick={showNavbar}>
             <Link className='link' to='/'>Home</Link>
          </div>
          <div className="item" onClick={showNavbar}>
             <Link className='link' to='/products'>Products</Link>
          </div>
          <div className="item" onClick={showNavbar}>
             <Link className='link'>Catalogs</Link>
          </div>
          <div className="item" onClick={showNavbar}>
             <Link className='link' to='/contact'>Contact</Link>
          </div>
    </div>
          <div className="cartIcon" onClick={()=>setOpen(!open)} >
          <ShoppingCartOutlinedIcon/>
          <span>{products.length}</span>
          </div>
          <div className="menuIcon" >
          <MenuOpenIcon onClick={showNavbar}/>
          </div>
      </div>
     
    {open && <Cart/>}
</div>
  )
}

export default Navbar




