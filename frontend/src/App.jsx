import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import Plotting from './pages/Plotting'
import SingleLimit from './pages/SingleVarCalc'
import MultiVarCalc from './pages/Multivariable'
import LinAlg from './pages/LinAlg'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plotting" element={<Plotting />} />
          <Route path="/calculus/single_variable/" element={<SingleLimit />} />
          <Route path="/calculus/multivariable/" element={<MultiVarCalc />} />
          <Route path="/linear_algebra/" element={<LinAlg />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
