import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
  return (
    <>
      <Navbar /> 
      <h1>Root Layout</h1>
      <Outlet/> 
    </>
  )
}

export default RootLayOut
