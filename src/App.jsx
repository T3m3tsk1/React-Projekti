import React from 'react'
import Navbar from './Components/Navbar'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'

import Home from './Components/pages/Home'
import Info from './Components/pages/Info'
import Contact from './Components/pages/Contact'
import Products from './Components/pages/Products'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
        </Routes>

      </Router>
      
      <Footer />
    </>
  )
}

export default App