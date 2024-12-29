import React from 'react'
import Banner from '../banner/Banner'
import SliderApp from '../slider/Slider'
import Products from '../product/Products'
import OurCustomers from '../our Customers/OurCustomers'
import Services from '../service/Services'
const Home = () => {
  return (
    <main>
      <Banner />
      <SliderApp />
      <Services />
      <Products />
      <OurCustomers />
    </main>
  )
}

export default Home