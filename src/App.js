import React, { useState } from 'react'
import buckelist from './bucketList_20200508.json'
import styled from 'styled-components'
import Movie from './Movie'
import FilterButton from './components/FilterButton/FilterButton'

const allMovies = Object.keys(buckelist[0])

function App() {
  const [filterdMovies, setFilterdMovies] = useState(allMovies)
  const [isActive, setIsActive] = useState('')
  const isEmpty = filterdMovies.length === 0
  const [activeFilter, setActiveFilter] = useState('movie')
  const [searchInput, setSearchInput] = useState('')

  return (
    <Wrapper>
      <Input
        placeholder="Search List by"
        type="text"
        onChange={(event) => inputHandler(event, activeFilter)}
      ></Input>
      <FilterWrapper>
        <FilterButton
          title="movie"
          isActive={activeFilter === 'movie'}
          onClick={handleFilter}
          filterName="movie"
        />
        <FilterButton
          title="actor"
          isActive={activeFilter === 'actor'}
          onClick={handleFilter}
          filterName="actor"
        />
        <FilterButton
          title="director"
          isActive={activeFilter === 'director'}
          onClick={handleFilter}
          filterName="director"
        />
      </FilterWrapper>

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
    filterMovies(filter)
  }

  function handleClick(index) {
    setIsActive(isActive === index ? '' : index)
  }

  function handleFilter(filter) {
    setActiveFilter(filter)
    filterMovies(filter)
  }

  function filterMovies(filter) {
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
}

export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Input = styled.input`
  all: unset;
  border-bottom: 1px solid #d1def0;
  border-left: none;
  border-right: none;
  border-top: none;
  color: #14253e;
  font-size: 38px;
  margin: 20px;
  padding: 0 20px 0 20px;
  text-align: center;
  &::placeholder {
    color: #1e375c;
  }
`

const Alert = styled.p`
  color: #1e375c;
`

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`
