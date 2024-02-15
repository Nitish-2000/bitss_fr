/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css';
import { getImageurl } from '../../util';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header() {
    let navigate = useNavigate()
  return (
   <div className='Container'>
   <div className='header'>
    <div className='headerImg'>
        <img 
        // onClick={navigate("/")}
        className='image1'
        src={getImageurl("header/bitss_icon_1.png")} alt='headerImage' />
    </div>
    <div className='menu'>
        <img 
        className='menuBtn'
        src = {getImageurl("header/menuBtn.png")}
        alt = "Ment-Btn" />
        <ul
        className='menuItems'
        >
            <li>
                <Link to="/" className="activeLink">Home</Link>
            </li>
            <li>
            <Link to={"product"} className="activeLink">
                Bitss Cyber security
            </Link>
            </li>
            <li>
            <Link to={"free-products"} className="activeLink">
               Free Products
            </Link>
            </li>
            <li>
            <Link to={"about-us"} className="activeLink">
                About Us
            </Link>
            </li>
            <li>
            <Link to={"contact-us"} className="activeLink">
               Contact Us
            </Link>
            </li>
        </ul>
    </div>
    <div className='cart'>
          <img 
          className='cartImg'
          src={getImageurl("header/cartImage.png")}
          alt = "cart" />
          <button 
          className='btn'>
            My Account
          </button>
    </div>
    <div className = "line"></div>
   </div>
   </div>
  )
}

export default Header