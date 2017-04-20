import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render () {
    return (
      React.DOM.div(null, [MyTitleFactory({
        userName: 'Arvind',
        color: 'peru'
      }),
        MyTitleFactory({
          userName: 'Krati',
          color: 'mediumaquamarine'
        }),
        MyTitleFactory({
          userName: 'Askhat',
          color: 'rebbcapurple'
        })
      ])
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
