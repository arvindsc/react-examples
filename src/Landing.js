import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const { string } = PropTypes
class Landing extends React.Component {
  render () {
    return (
      <div className='landing'>
        <h1> react-nplayer </h1>
        <input value={this.props.searchTerm} type='text' placeholder='Search' />
        <Link to='/search'>  Browse All</Link>
      </div>
    )
  }
}
Landing.propTypes = {
  searchTerm: string
}
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}
export default connect(mapStateToProps)(Landing)
