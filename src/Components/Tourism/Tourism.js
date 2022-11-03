import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from '../Navbar/NavLinks';
import SimpleNavBar from '../Navbar/SimpleNavBar';
import Places from './Places';
import Slider from './Slider'

function Tourism() {

  return (
    <div className=''>
  
        <SimpleNavBar />
 
        <Slider />
        <Places id="places"/>
    </div>
  )
}

export default Tourism