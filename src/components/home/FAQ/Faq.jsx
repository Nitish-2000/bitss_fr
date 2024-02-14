/* eslint-disable no-unused-vars */
import React from 'react'
import './Faq.css';
import Data from './FaqData.json'
import Faqcard from './Faqcard';

function Faq() {
  return (
    <div className='faqContainer'>
      <h1 className='faqHeading'>Frequently Asked Questions (FAQ) About Bitss</h1>
      <div className='faqline'></div>

      <div className='faqCard'>
          {
            Data.map((data,index)=>{
              return <Faqcard key={index} data={data} />
            })
          }
      </div>
    </div>
   
  )
}

export default Faq