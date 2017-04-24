import React from 'react'
import preload from '../dist/data.json'
import ShowCard from './ShowCard'
import { string } from 'prop-types'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    return (
      <div className='search'>
        <header>
          <h1>nplayer</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search' />
        </header>
        <div>
          {preload.shows.filter((show) => {
            return `${show.title} ${show.description}`.toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0
          })
            .map(function (show) {
              return <ShowCard key={show.imdbID} {...show} />
            })}
        </div>

      </div>
    )
  }
}
Search.propTypes = {
  searchTerm: string
}
export default Search
