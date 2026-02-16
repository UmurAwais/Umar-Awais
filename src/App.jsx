import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BlogDetails from './pages/BlogDetails'
import TermsAndConditions from './pages/TermsAndConditions'
import ScrollToTopReset from './components/ScrollToTopReset'

const App = () => {
  return (
    <Router>
      <ScrollToTopReset />
      <div className="min-h-screen bg-black w-full relative">
        {/* Premium Grain Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-9999 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App