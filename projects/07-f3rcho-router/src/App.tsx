import { useState } from 'react'
import './App.css'

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to my page</p>
      <a href='/about'>Ir a About Page</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1546490562303369216/tjKj1P01_400x400.jpg' alt='twitter profile' />
        <p>Hello, I'm Fernando and I'm creating a clon fo react router</p>
      </div>
      <a href='/'>Go to Home Page</a>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
