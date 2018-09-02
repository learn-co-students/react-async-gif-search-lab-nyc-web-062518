import React, {Component} from 'react'

class GifSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query : ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchGifs(this.state.query)
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
        <button>Find Gifs</button>
      </form>
    )
  }
}

export default GifSearch
