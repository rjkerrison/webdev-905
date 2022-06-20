import React, { Component } from 'react'

class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>{this.props.content}</div>
  }
}

export default Footer
