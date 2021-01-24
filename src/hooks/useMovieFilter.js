import { useState } from 'react'
import buckelist from '../bucketList_20200508.json'
const allMovies = Object.keys(buckelist[0])

export default function useMovieFilter() {
  const [filterdMovies, setFilterdMovies] = useState(allMovies)

  function filterMovies(filter, searchInput) {
    filter === 'movie'
      ? setFilterdMovies(
          allMovies.filter((movieTitle) =>
            movieTitle.toLowerCase().includes(searchInput.toLowerCase())
          )
        )
      : filter === 'actor'
      ? setFilterdMovies(
          allMovies.filter(
            (movieTitle) =>
              buckelist[0][movieTitle].tmdb.actors.filter((name) =>
                name.toLowerCase().includes(searchInput.toLowerCase())
              ).length > 0
          )
        )
      : setFilterdMovies(
          allMovies.filter(
            (movieTitle) =>
              buckelist[0][movieTitle].tmdb.director.filter((name) =>
                name.toLowerCase().includes(searchInput.toLowerCase())
              ).length > 0
          )
        )
  }

  return { filterdMovies, filterMovies }
}
