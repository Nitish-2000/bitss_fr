/* eslint-disable no-unused-vars */

import React from 'react'
import './About.css'
// import Video from './Videos/video.mp4'
import { getImageurl } from "../../../util";

function About() {
  return (
    <div className='abtContainer'>
        <div className='abtContent'>
            <h1 className='abtHeading'>About Our Company</h1>
            <p>At BITSS.fr by BFIN SASU a Franch IT company, we are a leading cyber security company dedicated to safeguarding or protecting your digital infrastructure. With a team of highly skilled experts and state-of-the-art technologies, Our research over the years as may bitss ethicus. Whether you are a small business, a large enterprise,
             or an individual, we have the expertise to protect your network, servers, websites, and data from evolving cyber threats.</p>
             <div className='abtmission'>
                <img src={getImageurl("about/mission-icon.png")} alt="img" />
                <div className='abtMissionContent'>
                    <h1>Our Mission</h1>
                    <p>we offer comprehensive security solutions tailored to your specific needs</p>
                </div>
             </div>
             <div className='abtmission'>
                <img src={getImageurl("about/vision-icon.png")} alt="img" />
                <div className='abtMissionContent'>
                    <h1>Our Vission</h1>
                    <p>we offer comprehensive security solutions tailored to your specific needs</p>
                </div>
             </div>
        </div>
        <div className='abtPlay'>
        <video className='abtVideo'
        // width="650" height="250"
        autoPlay
        loop
        muted>
            <source src="https://bitss.fr/wp-content/uploads/2023/12/bitss_video.mp4" type='video/mp4'/>
         </video>
         <button className='abtbutton'>Contact Us</button>
        </div>
    </div>
  )
}

export default About