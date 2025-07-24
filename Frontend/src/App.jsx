import React from 'react'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavBar />
<div>
  <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
  </div>    
    </div>
  
)
}

export default App
