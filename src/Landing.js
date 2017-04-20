import React from 'react'
import {Link} from 'react-router-dom'

class Landing extends React.Component {
  render () {
    return (
      <div className='landing'>
        <h1> react-nplayer </h1>
        <input type='text' placeholder='Search' />
        <Link to='/search'> or Browse All</Link>
      </div>
    )
  }
}
export default Landing
