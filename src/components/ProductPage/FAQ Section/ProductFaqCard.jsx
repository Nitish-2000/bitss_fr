/* eslint-disable no-unused-vars */
import React from 'react'
import './ProductfaqCard.css'
import { useCollapse } from 'react-collapsed'
import { useState } from 'react'


function ProductFaqCard({data}) {
  const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  return (
    <div className='Container'>
      <div className='productFaqHead'>
        <h3 className='productFaqCardTitle'>{data.title}</h3>
        <div className='FtrCardBtn1'>
        <button 
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? '-' : '+'}
      </button>
      </div>
      </div>
      <section  className='FtrCardContent'{...getCollapseProps()}>{data.content}</section>

    </div>
  )
}

export default ProductFaqCard