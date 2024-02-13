/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { getImageurl } from '../../../util'
import './ServiceCard.css'

function ServiceCard({
    data:{title,detail}
}) {
  return (
    <div className='scContainer'>
        <h3 className='sctitle'>{title}</h3>
        <p className='scdetails'>{detail}</p>
        <div className='sclast'>
        <span className='scRead'>Read More  <img className='scimage' src={getImageurl("hero/arrowimage.png")} alt="." /></span>
        
        </div>
    </div>
  )
}

export default ServiceCard