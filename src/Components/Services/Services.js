import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import RealTax from './RealTax'

function Services() {
  return (
    <div className='w-full h-full'>
        <Navbar />
        <Routes>
          <Route path='/real-property-tax-calculation' element={<RealTax />} />
        </Routes>

    </div>
  )
}

export default Services