import { useState } from 'react'
import noResults from '../mocks/no-results.json'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      fetch(`http://www.omdbapi.com/?apikey=c17541ea&s=${search}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json)
        })
    } else {
      setResponseMovies(noResults)
    }
  }

  return {
    movies: mappedMovies,
    getMovies
  }
}
