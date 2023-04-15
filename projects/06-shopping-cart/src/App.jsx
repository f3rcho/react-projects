import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'

function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
