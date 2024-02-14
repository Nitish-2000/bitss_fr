import React from 'react'
import Hero from './HeroSection/Hero'
import './Product.css'
import Feature from './FeatureSection/Feature'
import ProductFaq from './FAQ Section/ProductFaq'
function Product() {
  return (
    <div className='productContainer'>
        <Hero />
        <Feature />
        <ProductFaq />
    </div>
  )
}

export default Product