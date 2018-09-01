import React, { Component } from 'react'

function GifList(props) {
  return(
    <ul>
      {props.gifs.map(gif => <div><img key={gif.id} src={gif.images.original.url} alt={gif.title}/><br/></div>)}
    </ul>
      )
    }

export default GifList
