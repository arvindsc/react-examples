import React from 'react'
import preload from '../dist/data.json'
import ShowCard from './ShowCard'

class Search extends React.Component {
  render () {
    return (
      <div className='search'>
        {preload.shows.map(function (show) {
          return <ShowCard key={show.imdbID} {...show} />
        }
        )}
      </div>
    )
  }
}
export default Search
