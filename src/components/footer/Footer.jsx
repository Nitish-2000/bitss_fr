/* eslint-disable no-unused-vars */
import React from 'react'
import {getImageurl} from '../../util'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import './Footer.css'

function Footer() {
  return (
    <div className='Footercontainer'>
      <h1>Copyright ©2023 bitss.fr | All Rights Reserved</h1>
      <div className='Footercontent'>
        <img src={getImageurl("header/bitss_logo.png")} />
        <div className='FooterPara'>
        <p>BITSS.FR BY BFIN SASU</p>
        </div>
      </div>
      <div className='Fotericons'>
        <a><p>Cookie Policy &#160;</p></a>
        <a>Contact Us &#160;</a>

        <FaFacebookF />&#160;
        <FaSquareTwitter />&#160;
        <FaLinkedinIn />
</div>
    </div>
  )
}

export default Footer