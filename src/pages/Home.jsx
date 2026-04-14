import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import TextMarquee from '../components/TextMarquee'
import ScrollToTop from '../components/ScrollToTop'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-black w-full relative">
      <div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] bg-white/[0.07] rounded-full blur-[120px] pointer-events-none animate-pulse z-0"></div>
      <div className="fixed top-[-5%] right-[20%] w-[400px] h-[400px] bg-white/[0.05] rounded-full blur-[100px] pointer-events-none animate-pulse z-0" style={{ animationDelay: '2s' }}></div>
      <Header />
      <Hero />
      <TextMarquee text="ENGINEERING DIGITAL ECOSYSTEMS" speed={40} />
      <About />
      <Projects />
      <Services />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Home
