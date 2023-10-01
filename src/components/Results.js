import React from 'react'
import "../results.css"

export const Results = ({name}) => {
  return (
    <div 
    className='results' 
    onClick={(e) => alert(`You clicked on ${name}`)}>{name}</div>
  )
}
