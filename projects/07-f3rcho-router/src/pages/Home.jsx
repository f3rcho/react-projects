import { Link } from '../components/Link.jsx'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to my page</p>
      {/* for intance to simplify we use the button  */}
      <Link to='/about'>Ir a About Page</Link>
    </>
  )
}
