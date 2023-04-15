import { useFilters } from '../hooks/useFilters'
import './footer.css'

export function Footer () {
  const { filters } = useFilters()
  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {
        /*
        <h4>Prueba tecnica de React </h4>
      <h5>Shopping Cart con useContext y useReducer</h5>
      */
      }
    </footer>
  )
}
