import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const { string } = PropTypes

class ShowCard extends React.Component {
  render () {
    const { title, poster, year, description, imdbID} = this.props
    return (
      <Link to={`/details/${imdbID}`}>
        <div className='show-card'>
          <img src={`/dist/img/posters/${poster}`} />
          <div> <h3>{title}</h3>
            <h4>{year}</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>

    )
  }
}

ShowCard.propTypes = {
  poster: string,
  title: string,
  year: string,
  description: string
}

export default ShowCard
