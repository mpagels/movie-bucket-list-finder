import React, { useState } from 'react'
import buckelist from './bucketList_20200508.json'
import styled from 'styled-components'
import Movie from './Movie'
const allMovies = Object.keys(buckelist[0])

function App() {
  const [filterdMovies, setFilterdMovies] = useState(allMovies)
  const [isActive, setIsActive] = useState('')
  const isEmpty = filterdMovies.length === 0

  return (
    <Wrapper>
      <Input
        placeholder="Search List"
        type="text"
        onChange={inputHandler}
      ></Input>
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

  function inputHandler(event) {
    setIsActive('')
    setFilterdMovies(
      allMovies.filter((movieTitle) =>
        movieTitle.toLowerCase().includes(event.target.value.toLowerCase())
      )
    )
  }

  function handleClick(index) {
    setIsActive(isActive === index ? '' : index)
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
