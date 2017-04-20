import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render () {
    return (
      <div>
        <MyTitle title= 'Title one'  color= 'peru'/>
        <MyTitle title= 'Title two'  color= 'mediumaquamarine'/>
        <MyTitle title= 'Title three'  color= 'rebbcapurple'/>
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
