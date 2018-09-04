import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  fetchGifs = (query = "puppies") => {
    let url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=5`
    fetch(url)
    .then(res => res.json())
    .then(({data}) => this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) }))
  }

  componentDidMount() {
    this.fetchGifs()
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
