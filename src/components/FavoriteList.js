import React from 'react'
import DeleteFavorites from '../containers/DeleteFavorites'
import WebSearchBeer from './WebSearchBeer'

import FlexView from 'react-flexview'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import '../stylesheets/list.css';
import 'bootstrap/dist/css/bootstrap.css'

const FavoriteList = (props) => {
  return(
    props.beers.map((beer, i) =>
      <FlexView hAlignContent='center' marginBottom='50px' key={i}>
        <Card style={{ width: '30rem'}}>
          <h2>{beer.name}</h2>
          <Card.Body>
            <Card.Text>
              {beer.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>
              IBU: {beer.style !== undefined ? beer.style.ibuMin : 'N/A'} - {beer.style !== undefined ? beer.style.ibuMax : 'N/A'}(min-max)
              ABV: {beer.style !== undefined ? beer.style.abvMin : 'N/A'} - {beer.style !== undefined ? beer.style.abvMax : 'N/A'}(min-max)
            </ListGroupItem>
            <ListGroupItem>Status: {beer.isRetired === "Y" ? 'Discontinued' : 'Available'}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <DeleteFavorites id={beer.id} name={beer.name}/>{' '}
            <WebSearchBeer name={beer.name} />
          </Card.Body>
        </Card>
      </FlexView>
    )
  )
}

export default FavoriteList
