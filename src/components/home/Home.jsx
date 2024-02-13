/* eslint-disable no-unused-vars */

import React from 'react'
import Hero from './hero/Hero'
import Price from './price/Price'
import Services from './services/Services'
function Home() {
  return (
    <section className='container'>
        <Hero />
        <Price />
        <Services />
    </section>
   
  )
}

export default Home