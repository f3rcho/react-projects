export default function SearchPage ({ routeParams }) {
  // here we can include an fetch to request an API with an useEffect
  return (
    <h1>Searching for {routeParams.query}</h1>
  )
}
