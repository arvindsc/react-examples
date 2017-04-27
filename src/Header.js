import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class Header extends React.Component {
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
          Back
        </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>nvideo </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}
const {func, bool, string} = PropTypes
Header.propType = {
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}
export default Header
