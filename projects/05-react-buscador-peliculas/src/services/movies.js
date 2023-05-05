export async function searchMovies ({ search }) {
  if (search === '') return null
  const API_KEY = 'c17541ea'
  const BASE_URL = 'http://www.omdbapi.com/'
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${search}`
    )
    const json = await response.json()
    const movies = json.Search
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
