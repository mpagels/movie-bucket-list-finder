import { useState } from 'react'
import buckelist from '../bucketList_20200508.json'
const allMovies = Object.keys(buckelist[0])

export default function useMovieFilter() {
  const [filterdMovies, setFilterdMovies] = useState(allMovies)
  const [activeGenreFilter, setActiveGenreFilter] = useState('')
  console.log(activeGenreFilter)

  function filterMovies(filter, searchInput) {
    const moviesToSearch =
      activeGenreFilter !== ''
        ? allMovies.filter((movie) => {
            const genres = buckelist[0][movie].tmdb.genres.filter(
              (genre) => genre.name === activeGenreFilter
            )
            return genres.length > 0
          })
        : allMovies

    const movie =
      filter === 'movie'
        ? movieSearch(moviesToSearch, searchInput)
        : filter === 'actor'
        ? actorSearch(moviesToSearch, searchInput)
        : directorSearch(moviesToSearch, searchInput)

    setFilterdMovies(movie)
  }

  return {
    filterdMovies,
    filterMovies,
    activeGenreFilter,
    setActiveGenreFilter,
  }

  function movieSearch(movieList, searchInput) {
    const movies = movieList.filter((movieTitle) =>
      movieTitle.toLowerCase().includes(searchInput.toLowerCase())
    )
    return movies
  }

  function actorSearch(movieList, searchInput) {
    const movies = movieList.filter(
      (movieTitle) =>
        buckelist[0][movieTitle].tmdb.actors.filter((name) =>
          name.toLowerCase().includes(searchInput.toLowerCase())
        ).length > 0
    )
    return movies
  }

  function directorSearch(movieList, searchInput) {
    const movies = movieList.filter(
      (movieTitle) =>
        buckelist[0][movieTitle].tmdb.director.filter((name) =>
          name.toLowerCase().includes(searchInput.toLowerCase())
        ).length > 0
    )

    return movies
  }
}
