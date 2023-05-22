import { Link } from '../components/Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img src='https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/bernie.gif' alt='Not found' />
      </div>
      <Link to='/'>Back to Home</Link>
    </>
  )
}
