import React from 'react'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import About from './sections/About'


const App = () => {
  return (
    <div>
     <Routes>
      <Route path='https://TEAtech-TBKs.github.io/Modern-react-Landing-Page-template-for-Digital-Marketing-Buisness' element={<LandingPage/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
    </div>
  )
}

export default App