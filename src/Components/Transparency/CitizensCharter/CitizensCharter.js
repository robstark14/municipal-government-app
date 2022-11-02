import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import Ordinances from './Ordinances'

function CitizensCharter() {
  return (
    <div>
     
      <Routes>
        <Route path='ordinances' element={<Ordinances />} />
      </Routes>
    </div>
  )
}

export default CitizensCharter