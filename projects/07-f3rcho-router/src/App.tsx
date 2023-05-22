import './App.css'
import { Router } from './components/Router'

import AboutPage from './pages/About'
import HomePage from './pages/Home.jsx'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  }
]

function App () {
  return (
    <main>
      <Router routes={routes} />
    </main>
  )
}

export default App
