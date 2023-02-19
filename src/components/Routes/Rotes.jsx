import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Cards from '../Cards/Cards'
import Nav from '../Nav/Nav'

const Rotes = () => {
  return (
    <div>
        <Nav/>
      <Routes>
        <Route path='/:' element={<Home/>} />
        <Route path='/menu' element={<Cards/>} />
      </Routes>
    </div>
  )
}

export default Rotes
