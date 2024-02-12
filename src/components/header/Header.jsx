/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css';
import { getImageurl } from '../../util';
import { Link, NavLink } from 'react-router-dom';


function Header() {
  return (
    <>
   <div className='header'>
    <div className='headerImg'>
        <img 
        className='image'
        src={getImageurl("header/bitss_logo.png")} alt='headerImage' />
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
            <NavLink to={"cyber-bitss-security-BITSS"} className="activeLink">
                Bitss Cyber security
            </NavLink>
            </li>
            <li>
            <NavLink to={"free-products"} className="activeLink">
               Free Products
            </NavLink>
            </li>
            <li>
            <NavLink to={"about-us"} className="activeLink">
                About Us
            </NavLink>
            </li>
            <li>
            <NavLink to={"contact-us"} className="activeLink">
               Contact Us
            </NavLink>
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
   </>
  )
}

export default Header