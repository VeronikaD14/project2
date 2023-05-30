//import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Categories from './components/Categories'
import Users from './components/Users'
import Nav from './components/Nav'
import Reviews from './components/Reviews'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
      <>
      <Header/>
     <Nav/>
     <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/categories" element ={<Categories/>}/>
        <Route path="/reviews" element ={<Reviews/>}/>
        <Route path="/users" element ={<Users/>}/>

     </Routes>

     </>
    </BrowserRouter>
  )
}

export default App
