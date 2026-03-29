import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import EventMarquee from './components/EventMarquee'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import { ToastProvider } from './components/ToastContext'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Ignite from './pages/events/Ignite'
import CaseHunt from './pages/events/CaseHunt'
import FoundersRunway from './pages/events/FoundersRunway'
import AdMania from './pages/events/AdMania'
import BrandWars from './pages/events/BrandWars'
import TheListing from './pages/events/TheListing'
import Mokshapatram from './pages/events/Mokshapatram'
import FoundersTalk from './pages/events/FoundersTalk'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function Layout({ children }) {
  const { pathname } = useLocation()
  return (
    <>
      <CustomCursor />
      {pathname === '/' && <EventMarquee />}
      <Navbar />
      <div className="pt-0 min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  )
}

function App() {
  return (
    <ToastProvider>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />

            <Route path="/events/ignite" element={<Ignite />} />
            <Route path="/events/casehunt" element={<CaseHunt />} />
            <Route path="/events/founders-runway" element={<FoundersRunway />} />
            <Route path="/events/ad-mania" element={<AdMania />} />
            <Route path="/events/brand-wars" element={<BrandWars />} />
            <Route path="/events/the-listing" element={<TheListing />} />
            <Route path="/events/mokshapatram" element={<Mokshapatram />} />
            <Route path="/events/founders-talk" element={<FoundersTalk />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ToastProvider>
  )
}

export default App
