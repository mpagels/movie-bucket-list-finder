import React, { useState, useMemo } from 'react'
import buckelist from './bucketList_20200508.json'
import styled from 'styled-components'
import Movie from './Movie'
import FilterButton from './components/FilterButton/FilterButton'
import useFilterMovies from './hooks/useMovieFilter'
import InputField from './components/Inputs/InputField'

function App() {
  const {
    filterdMovies,
    filterMovies,
    activeGenreFilter,
    setActiveGenreFilter,
  } = useFilterMovies()

  const [isActive, setIsActive] = useState('')
  const isEmpty = filterdMovies.length === 0
  const [activeFilter, setActiveFilter] = useState('movie')
  const [searchInput, setSearchInput] = useState('')
  const [genreIsOpen, setGenreIsOpen] = useState(false)
  const genresList = useMemo(() => createGenres(buckelist), [buckelist])

  console.log(genresList)
  return (
    <Wrapper>
      <InputField
        placeholder="Search List by"
        type="text"
        activeFilter={activeFilter}
        onChange={inputHandler}
      />
      <FilterWrapper>
        <FilterButton
          title="movie"
          activeFilter={activeFilter}
          onClick={handleFilter}
        />
        <FilterButton
          title="actor"
          activeFilter={activeFilter}
          onClick={handleFilter}
        />
        <FilterButton
          title="director"
          activeFilter={activeFilter}
          onClick={handleFilter}
        />
      </FilterWrapper>
      <GenreButton onClick={handleGenreButton} isActive={genreIsOpen}>
        genre
      </GenreButton>
      {genreIsOpen && (
        <GenreWrapper>
          {genresList.map((genre, index) => (
            <MiniButton
              key={genre}
              isActive={genre === activeGenreFilter}
              onClick={() => handleOnGenrePick(genre)}
            >
              {genre}
            </MiniButton>
          ))}
        </GenreWrapper>
      )}
      {isEmpty ? (
        <Alert>
          Movie not in list <br />
          ;-&#40;
        </Alert>
      ) : (
        filterdMovies.map((movieName, index) => (
          <Movie
            key={movieName}
            onClick={handleClick}
            index={index}
            isOpen={isActive === index}
            {...buckelist[0][movieName]}
          />
        ))
      )}
    </Wrapper>
  )

  function inputHandler(event, filter) {
    setIsActive('')
    setSearchInput(event.target.value)
    filterMovies(filter, event.target.value)
  }

  function handleClick(index) {
    setIsActive(isActive === index ? '' : index)
  }

  function handleFilter(filter) {
    setActiveFilter(filter)
    filterMovies(filter, searchInput)
  }

  function handleGenreButton() {
    setGenreIsOpen((state) => !state)
  }

  function createGenres(movielist) {
    const movieList = Object.keys(movielist[0])
    const genres = movieList.map((movie) => {
      const genres = movielist[0][movie].tmdb.genres.map((genre) => genre.name)
      return [...genres]
    })
    const uniqueGenres = new Set(genres.flat())
    return Array.from(uniqueGenres)
  }

  function handleOnGenrePick(genre) {
    setActiveGenreFilter(genre !== activeGenreFilter ? genre : '')
  }
}

export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Alert = styled.p`
  text-align: center;
  color: #1e375c;
`

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const GenreButton = styled.button`
  all: unset;
  text-align: center;
  padding: 3px;
  margin: 10px;
  border-radius: 15px;
  ${(props) =>
    props.isActive
      ? 'background-color: var(--ButtonActive); color: white;'
      : 'background-color: white; color: var(--ButtonActive);'}
  border: solid 2px var(--ButtonActive);
  cursor: pointer;
`

const MiniButton = styled.button`
  all: unset;
  text-align: center;
  padding: 3px;
  margin: 3px;
  border-radius: 2px;
  ${(props) =>
    props.isActive
      ? 'background-color: var(--ButtonActive); color: white;'
      : 'background-color: white; color: var(--ButtonActive);'}
  border: solid 2px var(--ButtonActive);
  cursor: pointer;
`

const GenreWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
`
