import React from 'react'
import styled from 'styled-components'

export default function FilterButton({ title, isActive, onClick, filterName }) {
  return (
    <>
      <Button isActive={isActive} onClick={() => onClick(filterName)}>
        {title}
      </Button>
    </>
  )
}

const Button = styled.button`
  all: unset;
  text-align: center;
  padding: 10px;
  width: 100%;
  margin: 10px;
  border-radius: 15px;
  ${(props) =>
    props.isActive
      ? 'background-color: var(--ButtonActive); color: white;'
      : 'background-color: white; color: var(--ButtonActive);'}
  border: solid 2px var(--ButtonActive);
  cursor: pointer;
`
