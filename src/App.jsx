import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import BmiCalculator from './screens/BmiCalculator'
import SumNumber from './assets/SumNumber'
function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi-calculator" element={<BmiCalculator />} />
          <Route path="/sum-calculator" element={<BmiCalculator />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
