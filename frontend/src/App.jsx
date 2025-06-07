import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import Plotting from './pages/Plotting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plotting" element={<Plotting />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
