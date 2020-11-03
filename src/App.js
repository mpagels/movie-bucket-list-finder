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
  const [activeFilter , setActiveFilter] = useState("movie")
  const [searchInput, setSearchInput] = useState("")
  
  return (
    <Wrapper>
      <Input
        placeholder="Search List"
        type="text"
        onChange={(event) => inputHandler(event, activeFilter)}
      ></Input>
      <FilterWrapper>

      <FilterButton title="by movie name" isActive = {activeFilter === "movie"} onClick={handleFilter} filterName="movie"/>
      <FilterButton title="by actor name" isActive = {activeFilter === "actor"} onClick={handleFilter} filterName="actor"/>
      </FilterWrapper>

    
      {isEmpty ? (
        <Alert>
          Movie not in list <br />
          ;-(
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

    filter === "movie" 
    ?
    setFilterdMovies(
      allMovies.filter((movieTitle) =>
        movieTitle
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
      )
    )
    :
    setFilterdMovies(
      allMovies.filter((movieTitle) =>
      buckelist[0][movieTitle].tmdb.actors
      .filter(name => 
        name.toLowerCase()
        .includes(event.target.value.toLowerCase()))
        .length > 0 
      )
    )
  }

  function handleClick(index) {
    setIsActive(isActive === index ? '' : index)
  }

  function handleFilter(filter) {
    setActiveFilter(filter)
    filter === "movie" 
    ?
    setFilterdMovies(
      allMovies.filter((movieTitle) =>
        movieTitle
        .toLowerCase()
        .includes(searchInput.toLowerCase())
      )
    )
    :
    setFilterdMovies(
      allMovies.filter((movieTitle) =>
      buckelist[0][movieTitle].tmdb.actors
      .filter(name => 
        name.toLowerCase()
        .includes(searchInput.toLowerCase()))
        .length > 0 
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