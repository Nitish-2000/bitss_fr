import React from 'react'
import Data from './PriceData.json'
import PriceCard from './PriceCard'
import './Price.css'

function Price() {
  return (
    <div className='Pcontainer'>
      <div className="ptitle">
         <h2>Bitss: Strengthen Your Software Online Security -</h2>
<h2>Our Products Ensure Security and Elevate Confidence</h2>
      </div>
      <div className='pcard'>
        {Data.map((data,id)=>{
          return < PriceCard key={id} data={data} />
        })}
      </div>
    </div>
  )
}

export default Price