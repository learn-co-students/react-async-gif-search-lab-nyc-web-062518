import React, { Component } from 'react'

class GifSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
    }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSearch(this.state.value)
  }

}

export default GifSearch
