import React from 'react'
import { Results } from './Results'
import "../searchresults.css"

export const SearchResults = ({results}) => {
  return (
    <div className='search-results'>
        {
            results.map((user) => {
                return <Results key={user.id} user={user.name}/>
            })
        }
    </div>
  )
}
