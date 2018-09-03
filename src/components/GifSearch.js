import React from 'react'

class GifSearch extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      textInput: ''
    }
  }

  updateText = (event) => {
    this.setState({textInput: event.target.value})
  }

  updateQuery = (event) => {
    event.preventDefault()
    this.props.updateQuery(this.state.textInput)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.updateQuery}>
        <input value={this.state.textInput} type="text" onChange={this.updateText}/>
        <input type="submit"/>
        </form>
      </div>
    )
  }

}

export default GifSearch
