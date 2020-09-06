import React from 'react'
import styled from 'styled-components'

export default function Movie({ name, streaming }) {
  const {
    collection: { locations },
  } = streaming
  console.log(locations)
  return (
    <Container>
      <Title>
        <StreamingPlattfom plattforms={locations} />
        {name}
      </Title>
    </Container>
  )
}

function StreamingPlattfom({ plattforms }) {
  return (
    <Streaming>
      {plattforms.map(({ name }) => (
        <Plattform name={name}>&nbsp;</Plattform>
      ))}
    </Streaming>
  )
}

const Container = styled.div``

const Title = styled.p`
  position: relative;
  font-size: 24px;
  text-align: center;
`

const Streaming = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
`
const Plattform = styled.div`
  background-color: ${(props) => `var(--${props.name})`};
  display: inline;
`
