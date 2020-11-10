import React, { useState } from 'react'
import buckelist from './bucketList_20200508.json'
import styled from 'styled-components'
import Movie from './Movie'
import FilterButton from './components/FilterButton/FilterButton'
import useFilterMovies from './hooks/useMovieFilter'
import InputField from './components/Inputs/InputField'

function App() {
  const [filterdMovies, filterMovies] = useFilterMovies()
  const [isActive, setIsActive] = useState('')
  const isEmpty = filterdMovies.length === 0
  const [activeFilter, setActiveFilter] = useState('movie')
  const [searchInput, setSearchInput] = useState('')

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
