import React from 'react'
import { useCollapse } from 'react-collapsed'
import { useState } from 'react'
import { getImageurl } from "../../../util";
import './Faqcard.css';

function Faqcard({data}) {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  return (
    <div className='faqcardContainer'>
    <div className='farCardHead'>
    <h2 className='faqcardTitle'>{data.title}</h2>
    <img
    className='faqArrow'
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
       src= {isExpanded ? getImageurl("faq/up-arrow.png"):getImageurl("faq/down-arrow.png") }
      />
    </div>
    
    <section  className='faqCardDesc'{...getCollapseProps()}>{data.content}</section>
   
       
     
    
    </div>
  )
}

export default Faqcard