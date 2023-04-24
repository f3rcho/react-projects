import './App.css'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()

  const handleSubmit = (event) => {
    // get data from form. Plain js
    event.preventDefault()
    const fields = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(fields);
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
