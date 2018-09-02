import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      gifs:[]
    }
  }

  fetchGifs = ( query = 'dolphoins') => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(r=>r.json())
    .then(({data}) => this.setState({
      ...this.State,
      gifs: data.map(gif => (gif.images.original.url))
    }))
  }

  componentDidMount(){
    this.fetchGifs()
  }

  render(){
    return (<div>
      <GifList gifs={this.state.gifs} />
      <GifSearch fetchGifs={this.fetchGifs}/>
    </div>)
  }
}

export default GifListContainer
