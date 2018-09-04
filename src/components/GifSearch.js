import React from 'react'

class GifSearch extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return(
      <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor=""></label>
          <input onChange={this.props.handleChange} type="text" name='search' value={this.props.search}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }

}

export default GifSearch
