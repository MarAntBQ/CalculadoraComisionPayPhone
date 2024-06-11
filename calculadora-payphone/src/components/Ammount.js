import React from 'react'

export const Ammount = ({name, ammount}) => {
  return (
    <div className='ammount'>
        <p><strong>{name}</strong></p>
        <p>$ {ammount}</p>
    </div>
  )
}
