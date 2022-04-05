import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './context'

export const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`
  console.log(style)
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  )
}
