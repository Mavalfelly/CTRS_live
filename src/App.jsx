import './App.css'
import Footer from './Components/Footer/Footer.jsx'
import Landing from './Components/Landing/Landing.jsx'
import NavBar from './Components/NavBar/Nav'
import About from './Components/About/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
