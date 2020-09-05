import React, { useState } from 'react'
import buckelist from './bucketList_20200508.json'
import styled from 'styled-components'

const allMovies = Object.keys(buckelist[0])

function App() {
  const [filterdMovies, setFilterdMovies] = useState(allMovies)
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
          <p key={movieName}>{movieName}</p>
        ))
      )}
    </Wrapper>
  )

  function inputHandler(event) {
    setFilterdMovies(
      allMovies.filter((movieTitle) =>
        movieTitle.toLowerCase().includes(event.target.value.toLowerCase())
      )
    )
  }
}

export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 24px;
    text-align: center;
  }
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
