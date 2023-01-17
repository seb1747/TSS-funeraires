import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./header.css"

export default function header() {
  return (
    <header className='header_Wrapper'>
        <div className="logo">
        <p className='logo_text'>
       TSS
       </p>
       <p className='logo_text'>
        Funéraires
       </p>
        </div>  
        <Navbar/>
    </header>
  )
}
