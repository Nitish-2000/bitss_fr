import React from 'react'
import { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import './FeatureCard.css';


function FeatureCard({data}) {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  return (
    <div className='Container'>
        <div className='FtrHead'>
        <h2 className='FtrCardTitle'>{data.title}</h2>
        <div className='FrtcardBtn'>
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

export default FeatureCard