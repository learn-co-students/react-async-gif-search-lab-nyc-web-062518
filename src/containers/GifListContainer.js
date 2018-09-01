import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: []
    }
    }

  render() {
    return(
      <div>
        <GifSearch handleSearch={this.handleSearch}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  handleSearch = (value) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(data => this.setState({gifs: data.data.slice(0, 3)}))
  }

}

export default GifListContainer
