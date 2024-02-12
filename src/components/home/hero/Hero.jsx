import React from 'react'
import Data from "./HeroData.json"
import HeroCard from './HeroCard'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
      <div className='content'>
        <h1>Bitss.fr  Protect Your Client and Data With Bitss</h1>
        <h6>We are Protecting What Matters Most, With Bitss Protect Your Software, Network, Server, Website, Video & Administration Sites</h6>
      </div>
      <div className='data'>
        {Data.map((data,id)=>{
            return <HeroCard key={id} data={data} />
        })}
      </div>
    </div>
  )
}

export default Hero