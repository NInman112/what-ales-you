import React from 'react'
import SaveFavorites from '../containers/SaveFavorites'
import FlexView from 'react-flexview'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import '../stylesheets/list.css';
import 'bootstrap/dist/css/bootstrap.css'

const BeerList = (props) => {
  return(
    props.beers.map((beer, i) =>
      <FlexView hAlignContent='center' marginBottom='50px' key={i}>
        <Card style={{ width: '30rem'}}>
          {beer.labels !== undefined ? <Card.Img variant='top' src={beer.labels.medium} width='30%'/> : '' }
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
            <SaveFavorites beer={beer}/>
          </Card.Body>
        </Card>
      </FlexView>
    )
  )
}

export default BeerList
