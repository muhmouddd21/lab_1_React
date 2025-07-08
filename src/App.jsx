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
function App() {

  return (
   <>
   <HeroSection imgPath={img} />
   <Aboutme />
   <Skills />
   <Portfolio img1Path={'./assets/feet_1.jpeg'} img2Path={'./assets/feet_2.png'} img3Path={'./assets/feet_3.png'}/>
   <Footer />
   </>
  )
}

export default App
