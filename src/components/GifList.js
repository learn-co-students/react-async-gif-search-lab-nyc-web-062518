import React, { Component } from 'react'

export default class GifList extends Component {
  render() {
    return (
            <ul>
              {this.props.data.map((k, v) =>
                <li>
                  <img src={k.images.original.url}/>
                </li>
              )}
            </ul>
          )
  }
}
