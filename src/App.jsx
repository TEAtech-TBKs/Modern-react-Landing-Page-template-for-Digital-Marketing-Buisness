import React from 'react'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import About from './sections/About'


const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
    </div>
  )
}

export default App