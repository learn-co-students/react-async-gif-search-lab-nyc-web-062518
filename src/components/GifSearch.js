import React, { Component } from 'react'

export default class GifSearch extends Component {

state = {query: ""}

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    console.log("props in GifSearch:", this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
        </form>
      </div>
    )
  }
}
