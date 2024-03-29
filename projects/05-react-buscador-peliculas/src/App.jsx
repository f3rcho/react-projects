import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/ˆ\d+$/)) {
      setError('No se puede buscar por numeros')
      return
    }

    if (search.length < 3) {
      setError('No se puede buscar por menos de 3 caracteres')
      return
    }
    setError(null)
  }, [search])

  return {
    search,
    updateSearch,
    error
  }
}

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , []
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)
    debouncedGetMovies(newQuery)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' autoComplete='off' onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} type='text' name='query' placeholder='Avengers, Star Wars, The Matrix...' />
          <input type='checkbox' checked={sort} onChange={handleSort} name='sort' id='sort' />
          <button type='submit'>Buscar</button>
        </form>
        {
          error && <p style={{ color: 'red' }} className='error'>{error}</p>
        }
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
