import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import CitizensCharter from './CitizensCharter/CitizensCharter'
import DRRAP from './DRRAP'
import ExecutiveOrders from './ExecutiveOrders/ExecutiveOrders'
import FALGU from './FALGU'
import FDP from './FDP'
import GEF from './GEF'

function Transparency() {
  return (
    <div className=''>   
        <Navbar /> 
        <Routes>
            <Route path='/citizens-charter/*' element={<CitizensCharter />} />
            <Route path='/DRRAP' element={<DRRAP />} />
            <Route path='/executive-orders' element={<ExecutiveOrders />} />
            <Route path='/FALGU' element={<FALGU />} />
            <Route path='/FDP' element={<FDP />} />
            <Route path='/GEF' element={<GEF />} />
        </Routes>
    </div>
  )
}

export default Transparency