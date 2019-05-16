import React from 'react'
import Search from '../containers/Search'
import BeerList from '../containers/Beers'


const Home = () => {
  return(
    <div>
      <Search />
      <BeerList />
    </div>
  )
}

export default Home
