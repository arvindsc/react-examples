import React from 'react'
import preload from '../dist/data.json'
import ShowCard from 'ShowCards'

class Search extends React.Component {
  render () {
    return (
      <div className='search'>
        {preload.shows.map(show => <ShowCard key={show.imdbID} show={show} />
          )}
      </div>
    )
  }
}
export default Search
