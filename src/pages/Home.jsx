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
