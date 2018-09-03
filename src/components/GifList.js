import React from 'react'

const GifList = (props) => {
  console.log(props)
  return (
    <div>
      {props.gifs.map((gif, index) => <img key={index} src={gif.url} />)}
    </div>
  )
}

export default GifList
