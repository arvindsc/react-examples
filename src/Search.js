import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'
import PropTypes from 'prop-types'

const { string, shape, arrayOf } = PropTypes

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
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(function (show) {
              return (<ShowCard key={show.imdbID} {...show} />)
            })
          }
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  shows: arrayOf(shape({
    title: string,
    description: string
  }))
}

export default Search
