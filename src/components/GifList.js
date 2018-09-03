import React from 'react'

const GifList = (props) => {

  console.log(props.gifArray)

  const gifs = props.gifArray.map(obj => <li key={obj.id}><img src={obj.images.original.url}/></li>)

  return <div>
      <ul>
        {gifs}
      </ul>
    </div>

}

export default GifList
