
import React, { Component } from 'react'

export default class Sample06Class extends Component {
  render() {
    const {title, age} = this.props
    return (
      <div>
      <p className="w3-white w3-text-black w3-xxlarge">
        {"React Sample06Class (傳遞參數給類組件)"}
      </p>
      <div className="w3-white w3-center">
        <span className="w3-text-white w3-lime" style={{ width: '200px' }}>
          {`${title}-${age}`}
        </span>
      </div>
    </div>
    )
  }
}
