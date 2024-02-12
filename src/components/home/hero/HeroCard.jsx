import React from 'react'
import { getImageurl } from '../../../util'
import './HeroCard.css'

function HeroCard({
    data:{ image, title, line1, line2, line3 },
}) {
  return (
    <div className='container'>
        <img 
        src={getImageurl(image)}
        alt={`${title}`}
        className="image" />
        <h2 className='title'>{title}</h2>
        <p className='description'>{line1}</p>
        <p className='description'>{line2}</p>
        <p className='description'>{line3}</p>
        <button className='button'>Learn more</button>

    </div>
  )
}

export default HeroCard