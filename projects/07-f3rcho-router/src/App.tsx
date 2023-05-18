import { useEffect, useState } from 'react'
import { EVENTS } from './const/const'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About'
import './App.css'

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  // suscription to event
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
