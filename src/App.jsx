// import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import OffPlanSlider from './components/OffPlanSlider'
import PropertyCard from './components/PropertyCard'
import Layout from './layout'

function App() {

  return (
    <>
      <Layout>
        <Hero />
        <PropertyCard />
        <OffPlanSlider />
      </Layout>
    </>
  )
}

export default App
