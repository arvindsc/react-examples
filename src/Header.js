import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setSearchTerm} from './actionCreators'
import PropTypes from 'prop-types'

const {func, bool, string} = PropTypes
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }

  render () {
    let utilSpace
    console.log(this.props.showSearch)
    if (this.props.showSearch) {
      utilSpace = <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
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

Header.propTypes = {
  dispatch: func,
  showSearch: bool,
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
