import './App.css'
import Footer from './Components/Footer/Footer.jsx'
import Landing from './Components/Landing/Landing.jsx'
import NavBar from './Components/NavBar/Nav'
import About from './Components/About/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResourceList from './Components/Resources/Resources.jsx'
import Cont from './Components/Contact Us/Contact_us.jsx'
import BusinessTaxesPage from './Components/Services/Business_taxes/Biz_tax.jsx'
import PerTaxesPage from './Components/Services/Personal_taxes/Pers_tax.jsx'
import BookkeepingPage from './Components/Services/Bookkeeping/Bookkepping.jsx'
import IncPage from './Components/Services/Inc_serv/Inc_ser.jsx'
import IRSPage from './Components/Services/Rep/IRS_rep.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/resources'element={<ResourceList/>} />
          <Route path='/contact' element={<Cont/>} /> 
          <Route path='/business_taxes' element={<BusinessTaxesPage/>} />
          <Route path='/personal_taxes' element={<PerTaxesPage/>} />
          <Route path='/bookkeeping' element={<BookkeepingPage/>} />
          <Route path='/inc_services' element={<IncPage/>} />
          <Route path='/irs_rep' element={<IRSPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
