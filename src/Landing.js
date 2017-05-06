import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearchTerm } from './actionCreators'
import PropTypes from 'prop-types'

const {string, func, object} = PropTypes

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  handleSearchTerm (event) {
    this.props.dispatchSetSearchTerm(event.target.value)
  }
  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search')
  }
  render () {
    return (
      <div className='landing'>
        <h1> react-nplayer </h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input onChange={this.handleSearchTerm} value={this.props.searchTerm} type='text' placeholder='Search' />
        </form>
        <Link to='/search'>  Browse All</Link>
      </div>
    )
  }
}
Landing.propTypes = {
  searchTerm: string,
  dispatchSetSearchTerm: func
}
Landing.contextTypes = {
  router: object
}
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing)
