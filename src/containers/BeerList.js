import React from 'react'
import { connect } from 'react-redux'
import fetchBeers from '../actions/fetchBeers'
import SaveFavorites from '../components/SaveFavorites'
import FlexView from 'react-flexview'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import '../stylesheets/list.css';
import 'bootstrap/dist/css/bootstrap.css'

class BeerList extends React.Component {

  render() {
    const beers = this.props.beers.map(beer =>
      <FlexView hAlignContent='center' column='true' marginBottom='50px'>
        <Card style={{ width: '30rem'}}>
          <Card.Img variant='top' src={beer.labels !== undefined ? beer.labels.medium : 'not-available-circle.svg' } width='30%'/>
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
            <ListGroupItem>Status:{beer.isretired === true ? 'Discountinued' : 'Available'}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <SaveFavorites beer={{beer}}/>
          </Card.Body>
        </Card>
      </FlexView>
    )
      return(
      <div>
        { this.props.loading ? <h1>loading...</h1> : beers }
      </div>
    )
  }
}

BeerList.defaultProps = {beers: []}
function mapStateToProps(state) {
  return {
    beers: state.beersReducer.beers,
    loading: state.beersReducer.loading
  }
}

export default connect(mapStateToProps, {fetchBeers})(BeerList)
