import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Catalogue from './components/Catalogue'
import { Route, Routes } from 'react-router-dom'
import DogDetails from './components/DogDetails'

function App() {
  

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/catalogue" element={<Catalogue />}/>
        <Route path="/catalogue/:chipNumber" element={<DogDetails />}/>
       </Routes>
    </div>
  )
}

export default App
