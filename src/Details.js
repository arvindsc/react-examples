import React from 'react'
import Header from './Header'
import PropTypes from 'prop-types'

const { string, shape } = PropTypes

class Details extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ombdData: {}
    }
  }
  componentDidMount () {

  }
  render () {
    const {title, year, poster, trailer, description} = this.props.show

    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          <img src={`/dist/img/posters/${poster}`} alt='' />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}
Details.propTypes = {
  show: shape({
    title: string,
    year: string,
    poster: '',
    trailer: string,
    description: string,
    imdbID: string
  })
}
export default Details
