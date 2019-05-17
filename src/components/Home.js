import React from 'react'
import Search from '../containers/Search'
import BeerList from '../containers/Beers'

const Home = () => {
  return(
    <div>
      <Search />
      <br></br>
      <BeerList />
    </div>
  )
}

export default Home
