import React from 'react'
import styled from 'styled-components'

export default function FilterButton({title, isActive, onClick, filterName}) {
    return (
        <>
         <Button isActive={isActive} onClick={() => onClick(filterName)}>{title}</Button>
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
    ${props => props.isActive ? ( "background-color: #88A0BF; color: white;") : ("background-color: white; color: #88A0BF; border: solid 2px #88A0BF;") }
    cursor: pointer;
`