// import { useState } from 'react'
import './App.css';
import HeroSection from './Components/HeroSection';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import img from './assets/1740925288189.jpeg';
import img1 from './assets/feet_1.jpeg';
import img2 from './assets/feet_2.png';
import img3 from './assets/feet_3.png';
function App() {

  return (
   <>
   <HeroSection imgPath={img} />
   <Aboutme />
   <Skills />
   <Portfolio img1Path={img1} img2Path={img2} img3Path={img3}/>
   <Footer />
   </>
  )
}

export default App
