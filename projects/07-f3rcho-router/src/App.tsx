import './App.css'
import { Router } from './components/Router'

import AboutPage from './pages/About'
import HomePage from './pages/Home.jsx'
import Page404 from './pages/404'

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
      <Router routes={routes} defaultComponent={Page404} />
    </main>
  )
}

export default App
