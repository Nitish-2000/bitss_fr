/* eslint-disable no-unused-vars */
import React from 'react'
import Data from './ServiceData.json'
import ServiceCard from './ServiceCard'
import './Services.css'

function Services() {
  return (
   <div className='scontainer'>
    <div className='stitle'>
        <div className='scontent'>
            <div className='vl'>

            </div>
            <div className='stext'>
                <h3>We are a French research company committed to protecting your</h3>
                <h3> online website, video site, network, server and stop contact page</h3>
                <h3> spamming</h3>
            </div>
        </div>
        <div className='scard'>
            {
                Data.map((data,id)=>{
                    return <ServiceCard key = {id} data={data} />
                })
            }
        </div>
    </div>
   </div>
  )
}

export default Services