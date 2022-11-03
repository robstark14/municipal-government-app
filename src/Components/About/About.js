import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import History from './History'
import LocalOfficials from './LocalOfficials'
import OrgStructure from './OrgStructure'

function About() {
  return (
    <div>
      <Navbar /> 
        <Routes>
            <Route path='/history' element={<History id="history" />} />
            <Route path='/local-officials' element={<LocalOfficials />} />
            <Route path='/org-structure' element={<OrgStructure />} />
        </Routes>
    </div>
  )
}

export default About