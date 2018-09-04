import React from 'react'
import GifList from '../components/GifList'

import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      search: '',
      gifs: []
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      loaded: true
    })

  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let url = `http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(url).then(r => r.json()).then(d => {
      let three = d.data.slice(0, 3)
      this.setState({
        ...this.state,
        gifs: three
      })
    })
  }


  render() {
    if (this.state.loaded) {
      return(
        <div className='container'>
          <div className='row'>
            <GifList gifs={this.state.gifs}/>
            <GifSearch search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          </div>
      </div>
      )
    } else {
      return(
        <h1>Loading Gifs</h1>
      )
    }
  }

}

export default GifListContainer
