import React from 'react'
import { Results } from './Results'
import "../searchresults.css"

export const SearchResults = ({results}) => {
  return (
    <div className='search-results'>
        {results.map((item) => {
        return <Results key={item._id} name={item.text} />;
      })}
    </div>
  )
}
