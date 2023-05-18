import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)
  // create event when url changed
  const navigationEvent = new Event(NAVIGATION_EVENT)
  // whichever wants to listen the event
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to my page</p>
      {/* for intance to simplify we use the button  */}
      <button onClick={() => navigate('/about')}>Ir a About Page</button>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1546490562303369216/tjKj1P01_400x400.jpg' alt='twitter profile' />
        <p>Hello, I'm Fernando and I'm creating a clon of react router</p>
      </div>
      {/* for intance to simplify we use the button  */}
      <button onClick={() => navigate('/')}>Go to Home Page</button>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  // suscription to event
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
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
