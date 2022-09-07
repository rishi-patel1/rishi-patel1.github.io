import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
// import Testimonials from './components/testimonials/Testimonials'
// import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'


const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      {/* <Testimonials/>
      <Services/> */}

      <Contact/>
      <Footer/>
    </>
  )
}

export default App