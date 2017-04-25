import React from 'react'

class Details extends React.Component {
  render () {
    return (
      <pre><code>
        {JSON.stringify(this.props, null, 4)}
      </code></pre>
    )
  }
}
export default Details
