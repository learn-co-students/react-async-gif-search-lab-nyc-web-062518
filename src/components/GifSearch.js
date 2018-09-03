import React, { Component } from 'react'

class GifSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <input type="text" value={this.state.query} onChange={this.handleChange}>
      </input>
    )
  }
}

export default GifSearch
