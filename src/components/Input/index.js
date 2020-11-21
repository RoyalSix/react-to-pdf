import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const InputStyle = styled.input`
  -webkit-appearance: none;
  outline: none;
  border: none;
  background-color: white;
  border-radius: 8px;
  height: 45px;
  width: 100%;
  font-size: 15px;
  width: 335px;
  padding-left: 10px;
`;

function Input({ value, update }) {
  return (
    <InputStyle value={value} onChange={(e) => update(e.target.value)} />
  )
}

Input.propTypes = {
  value: PropTypes.string,
  update: PropTypes.func
}

export default Input

