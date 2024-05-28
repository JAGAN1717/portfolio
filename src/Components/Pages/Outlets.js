import React, { useEffect, useState, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Outlets() { 

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
