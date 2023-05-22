import './App.css'
import { Router } from './components/Router'

import AboutPage from './pages/About'
import HomePage from './pages/Home.jsx'
import Page404 from './pages/404'
import SearchPage from './pages/Search'

const appRoutes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/search/:query',
    component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App
