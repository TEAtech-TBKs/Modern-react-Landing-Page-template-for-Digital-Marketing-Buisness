import React from 'react'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/Modern-react-Landing-Page-template-for-Digital-Marketing-Buisness/' element={<LandingPage/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </div>
  )
}

export default App