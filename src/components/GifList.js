import React from 'react'

class GifList extends React.Component {

  render() {

    let mappedGifs = this.props.gifs.map(gifData => {
      // debugger
      return <li key={gifData.id}>
        <img id={gifData.id} src={gifData.images.original.url} alt=""/>
      </li>
    })

    return(
      <div className='col-xs-4 col-sm-4 col-md-4 col-lg-8'>
        <ul>
          {mappedGifs}
        </ul>
      </div>
    )
  }

}

export default GifList
