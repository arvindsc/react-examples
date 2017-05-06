import React from 'react'
import ShowCard from './ShowCard'
import { connect } from 'react-redux'
import Header from './Header'
import PropTypes from 'prop-types'

const { string, shape, arrayOf } = PropTypes

class Search extends React.Component {
  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
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
  })),
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Search)
