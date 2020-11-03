import React from 'react'
import { Swipeable } from 'react-swipeable'
import styled from 'styled-components/macro'

export default function Movie({ name, streaming, index, onClick, isOpen }) {
  const {
    collection: { locations },
  } = streaming
  return (
    <Swipeable
      onSwipedLeft={() => isOpen && onClick(index)}
      onSwipedRight={() => !isOpen && onClick(index)}
      preventDefaultTouchmoveEvent={true}
      trackTouch={true}
      delta={50}
    >
      <Title onClick={() => onClick(index)}>
        <StreamingPlattfom isOpen={isOpen} plattforms={locations} />
        {name}
      </Title>
    </Swipeable>
  )
}

function StreamingPlattfom({ plattforms, isOpen }) {
  return (
    <Streaming isOpen={isOpen}>
      {plattforms.map(({ name, display_name }) => (
        <Plattform key={name} isOpen={isOpen} name={name}>
          {isOpen ? display_name : <>&nbsp;</>}
        </Plattform>
      ))}
    </Streaming>
  )
}

const Title = styled.div`
  font-size: 24px;
  margin: 20px 0;
  position: relative;
  text-align: center;
  cursor: pointer;
`

const Streaming = styled.div`
  bottom: 0;
  height: inherit;
  position: absolute;
  ${(props) =>
    props.isOpen && 'display: flex; width: 100%; align-items: center;'}
`

const Plattform = styled.div`
  background-color: ${(props) => `var(--${props.name})`};
  display: inline;
  flex-grow: 1;
  font-size: ${(props) => (props.isOpen ? '12px' : '100%')};
  height: 25px;
  width: 100%;
  color: ${(props) =>
    props.name === 'DisneyPlusIVADE' || props.name === 'NetflixIVADE'
      ? 'white'
      : 'black'};
  ${(props) =>
    props.isOpen &&
    'display: flex; align-items: center; justify-content: center;'}
`
