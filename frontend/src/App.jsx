import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import Plotting from './pages/Plotting'
import SingleLimit from './pages/SingleVarCalc'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plotting" element={<Plotting />} />
          <Route path="calculus/single_variable/" element={<SingleLimit />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
