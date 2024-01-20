import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layouts/defaultLayout'
import Home from '../components/home/home'

const Routers = ():JSX.Element => {
  return (
    <>
        <Routes>
            <Route path='/' element={<DefaultLayout son={<Home/>}/>}/>
        </Routes>
    </>
  )
}

export default Routers