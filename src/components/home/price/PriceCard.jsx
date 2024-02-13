import React from 'react'
import './PriceCard.css'

function PriceCard({
    data :{title,title2,price,description,title3,line1,line2,line3,line4,line5,line6},
}) {
  return (
    <div className='pcContainer'>
    <h2 className='pctitle1'>{title}</h2>
    <h4 className='pctitle2'>{title2}</h4>
    <span className='pcdetail'><h1 className='pcprice'>{price}</h1> purchased price</span>
    <p className='pcdescription'>{description}</p>
    <button className='pcbutton'>Buy Now</button>
    <h3 className='pctitle3'>{title3}</h3>
    <p className='pcline2'>{line1}</p>
    <p className='pcline2'>{line2}</p>
    <p className='pcline2'>{line3}</p>
    <p className='pcline2'>{line4}</p>
    <p className='pcline2'>{line5}</p>
    <p className='pcline2'>{line6}</p>
    </div>
  )
}

export default PriceCard