import React from 'react'
import Data from './PriceData.json'
import PriceCard from './PriceCard'

function Price() {
  return (
    <div className='Container'>
      <div className="ptitle">
         <h2>Bitss: Strengthen Your Software Online Security -
Our Products Ensure Security and Elevate Confidence</h2>
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