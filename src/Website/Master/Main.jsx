import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

const Main = ({children}) => {
  return (
    <>
    <Header/>
    <Outlet/>
    {children}
    <Footer/>
   
      
    </>
  )
}

export default Main
