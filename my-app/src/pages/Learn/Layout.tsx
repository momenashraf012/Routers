import React from 'react'
import Navbar from '../../Navbar/Navbar'
import LearnAside from '../../Components/LearnAside'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <LearnAside/>
    <div>Layout start </div>
    <Outlet/>
  
    </>
  )
}

export default Layout