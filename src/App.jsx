import './App.css'
import Footer from './Components/Footer/Footer.jsx'
import Landing from './Components/Landing/Landing.jsx'
import NavBar from './Components/NavBar/Nav'
import About from './Components/About/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResourceList from './Components/Resources/Resources.jsx'
import ContactUs from './Components/Email/Email.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/resources'element={<ResourceList/>} />
        </Routes>

        <ContactUs/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
