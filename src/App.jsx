import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import TextMarquee from './components/TextMarquee'
import ScrollToTop from './components/ScrollToTop'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-black max-w-400 mx-auto relative">
      {/* Premium Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-9999 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <Header />
      <Hero />
      <TextMarquee text="TRANSFORMING AGENCY" speed={40} />
      <About />
      <Projects />
      <Footer />
      <ScrollToTop />
      {/* Future sections will go here */}
    </div>
  )
}

export default App