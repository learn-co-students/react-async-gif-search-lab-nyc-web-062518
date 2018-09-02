import React from 'react'

const GifList = props => {
  return (
    <ul>
      {props.gifs.map((gif, idx)=>{
        return <li key={idx}><img src={gif} alt="gif"/></li>
      })}
    </ul>
  )
}

export default GifList
