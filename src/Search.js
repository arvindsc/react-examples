import React from 'react'
import preload from '../dist/data.json'

class Search extends React.Component {
  render () {
    return (
      <div className='search'>
        {preload.shows.map(function (show) {
          return (<h3> {show.title}</h3>)
        })}
      </div>
    )
  }
}
export default Search
