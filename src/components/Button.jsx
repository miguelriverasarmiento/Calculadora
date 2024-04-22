import React from 'react'

export const Button = ({ value, handleButton }) => {
  return (
    <div className='calcBtns' onClick={() => handleButton(value)}>
        {value}
    </div>
  )
}
