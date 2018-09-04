import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor() {
    super()
    this.state = {}
  }

  handleChange(e) {
    this.props.onChange(e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit()
  }

  render() {
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" onChange={(e) => this.handleChange(e)}/>
      </form>
    )
  }
}
