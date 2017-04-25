import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import preload from '../dist/data.json'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import '../dist/normalize.css'
import '../dist/style.css'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route exact path='/' shows={preload.shows} component={Landing} />
          <Route path='/search'
            render={props => {
              return <Search shows={preload.shows} {...props} />
            }} />
          <Route
            path='/details/:id'
            component={(props) => {
              console.log(props)
              const shows = preload.shows.filter((show) => props.match.params.id === show.imdbID)
              return <Details show={shows[0]} {...props} />
            }} />
        </div>
      </BrowserRouter>
    )
  }
}
render(<App />, document.getElementById('app'))
