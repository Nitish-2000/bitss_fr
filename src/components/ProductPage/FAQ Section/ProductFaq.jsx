/* eslint-disable no-unused-vars */

import React from 'react'
import ProductFaqCard from './ProductFaqCard'
import './ProductFaq.css'
import Data from './Productfaq.json'

function ProductFaq() {
  return (
    <div className='fqContainer'>
      <h1>Frequently<br/>Asked Questions</h1>
      <div className='productFrcard'>
        {
          Data.map((data,index)=>{
            return  <ProductFaqCard key={index} data={data} />

          })
        }
      </div>
    </div>

  )
}

export default  ProductFaq
