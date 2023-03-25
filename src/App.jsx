import './App.css'

import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import VehicleModels from './pages/VehicleModels'
import Testimonials from './pages/Testimonials'
import OurTeam from './pages/OurTeam'
import Contact from './pages/Contact'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vehicle-models' element={<VehicleModels />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
