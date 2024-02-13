import React from 'react'

function PriceCard({
    data :{title,title2,price,description,title3,line1,line2,line3,line4,line5,line6},
}) {
  return (
    <div className='Container'>
    <h2>{title}</h2>
    <h4>{title2}</h4>
    <p><h1>{price}</h1> purchased price</p>
    <p>{description}</p>
    <button>Buy Now</button>
    <h3>{title3}</h3>
    <p>{line1}</p>
    <p>{line2}</p>
    <p>{line3}</p>
    <p>{line4}</p>
    <p>{line5}</p>
    <p>{line6}</p>
    </div>
  )
}

export default PriceCard