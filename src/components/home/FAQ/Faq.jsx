/* eslint-disable no-unused-vars */
import React from 'react'
import { getImageurl } from "../../../util";
import './Faq.css';
import { useState } from 'react';

function Faq() {
    let[collapse, setCollapse] = useState(false)
  return (
    <div className='fContainer'>
        <h1>Frequently Asked Questions (FAQ) About Bitss</h1>
        <div className='fcontent'>
           <div className='fcontent1'>
             <h2>What is Bitss Security Solutions?</h2>
             <img onClick={()=>setCollapse(prev => !prev)} src={getImageurl("faq/down-arrow.png")} />
             <p className={`long-text ${collapse? "expanded":""}`}>Bitss Security Solutions is an advanced set of digital security tools designed to protect your website, video content, and administration sites from various online threats. It offers comprehensive features to ensure the integrity of your digital assets.</p>
           </div>
        </div>
    </div>
  )
}

export default Faq