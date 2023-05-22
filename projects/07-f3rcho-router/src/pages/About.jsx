import { Link } from '../components/Link'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1546490562303369216/tjKj1P01_400x400.jpg' alt='twitter profile' />
        <p>Hello, I'm Fernando and I'm creating a clon of react router</p>
      </div>
      {/* for intance to simplify we use the button  */}
      <Link to='/'> Go to Home Page</Link>
    </>
  )
}
