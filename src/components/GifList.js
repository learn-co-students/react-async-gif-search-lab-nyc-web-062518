import React from "react"

const GifList = props => {
  console.log("props in GifList:", props)

  return (
    <div>
      <ul>
        {props.gifs.map(gif => <li><img key={gif.url} src={gif.url} alt={gif.slug}/></li>)}
      </ul>
    </div>
  )
}

export default GifList
