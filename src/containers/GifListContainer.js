import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {data: [], searchTerm: 'gif'}

  getGifs() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(obj => this.setState({data: obj.data.slice(0,3)}))
  }

  changeHandler(string) {
    this.setState({searchTerm: string})
  }

  submitHandler() {
    this.getGifs()
  }

  componentDidMount() {
    this.getGifs()
  }

  render() {
    return (
          <div>
          <GifList data={this.state.data}/>
          <GifSearch onChange={this.changeHandler.bind(this)} onSubmit={this.submitHandler.bind(this)}/>
          </div>
          )
  }

}
