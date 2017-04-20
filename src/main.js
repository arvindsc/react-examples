import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'
import '../dist/normalize.css'
import '../dist/style.css'

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <div className='app'>
          <Route exact path='/' component={Landing} />
          <Route exact path='/search' component={Search} />
        </div>
      </HashRouter>
    )
  }
}
render(<App />, document.getElementById('app'))
