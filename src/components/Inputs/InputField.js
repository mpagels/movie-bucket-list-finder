import React from 'react'
import styled from 'styled-components'

export default function InputField({
  placeholder,
  type,
  onChange,
  activeFilter,
}) {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      onChange={(event) => onChange(event, activeFilter)}
    />
  )
}

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
