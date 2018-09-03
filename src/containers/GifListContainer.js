import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      query: 'dogs',
      gifList: []
    }
  }

  componentDidMount = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json()).then(r => r.data.slice(0,3)).then(data => this.setState({ gifList: data}))
  }

  updateGifList = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json()).then(r => r.data.slice(0,3)).then(data => this.setState({ gifList: data}))
  }

  enterQuery = (text) => {
    this.setState({query: text}, function(){this.updateGifList()})
  }


  render() {
    return (
      <div>
        <GifSearch updateQuery={this.enterQuery}/>
        <GifList gifArray={this.state.gifList}/>
      </div>
    )
  }
}

export default GifListContainer
