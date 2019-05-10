import React, { Component } from 'react'


export default class Favorites extends Component {
  state = {
    favs: Object.values(localStorage)
  }

  render() {
    return(
      <div>
        <p>Favorites!</p>
          <ul>{this.state.favs.map(beer =>
            <li key={JSON.parse(beer).id}>{JSON.parse(beer).name}</li>)}
          </ul>
      </div>
    )
  }
}
