import React from 'react'

var MyTitle = React.createClass({
  render: function () {
    var style = {color: this.props.color}
  /* javascript output expression -{} */
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})
export default MyTitle
