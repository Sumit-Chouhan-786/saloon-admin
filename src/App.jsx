
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Appointment from './components/Appointment'

function App() {

  return (
  <>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/appointment' element={<Appointment />} />
  </Routes>
  </>
  )
}

export default App
