
export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to my page</p>
      {/* for intance to simplify we use the button  */}
      <button onClick={() => navigate('/about')}>Ir a About Page</button>
    </>
  )
}
