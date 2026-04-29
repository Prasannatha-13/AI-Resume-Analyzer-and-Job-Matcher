import React from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Home from './components/Home.jsx'
import Features from "./components/Features.jsx"
import Howitworks from './components/Howitworks.jsx'
import Results from './components/Results.jsx'
import Aboutus from './components/aboutus.jsx'

function App() {
  return(
  <div>
    <Navbar/>
    <Home/>
    <Howitworks/>
    <Features/>
    <Results/>
    <Aboutus/>
  </div>
  )
}

export default App
