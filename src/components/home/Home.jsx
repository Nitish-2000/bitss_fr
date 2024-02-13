/* eslint-disable no-unused-vars */

import React from 'react'
import Hero from './hero/Hero'
import Price from './price/Price'
import Services from './services/Services'
import Products from './products/Products'
import About from './About/About'
import Faq from './FAQ/Faq'
import Contact from './contact/Contact'
function Home() {
  return (
    <section className='container'>
        <Hero />
        <Price />
        <Services />
        <Products />
        <About />
        {/* <Faq /> */}
        <Contact />
    </section>
   
  )
}

export default Home