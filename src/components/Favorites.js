import React, { Component } from 'react'
import { getFavBeers } from '../actions/getFavBeers'
import DeleteFavorites from './DeleteFavorites'
import { connect } from 'react-redux'
import FlexView from 'react-flexview'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import '../stylesheets/list.css';
import 'bootstrap/dist/css/bootstrap.css'

export class Favorites extends Component {

  componentDidMount() {
    this.props.getFavBeers()
  }

  render() {
    const favBeers = this.props.favBeers && this.props.favBeers.map((beer, i) =>
    <FlexView hAlignContent='center' marginBottom='25px' marginTop='25px' key={i}>
      <Card style={{ width: '30rem'}}>
        <h2>{beer.name}</h2>
        <Card.Body>
          <Card.Text>
            {beer.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>IBU: {beer.ibuMin} - {beer.ibuMax}(min-max) ABV: {beer.abvMin} - {beer.abvMax}(min-max)</ListGroupItem>
          <ListGroupItem>Status:{beer.isretired === "Y" ? 'Discontinued' : 'Available'}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <DeleteFavorites id={beer.id} name={beer.name}/>
        </Card.Body>
      </Card>
    </FlexView>)
    return(
      <div>
        { this.props.loading ?  '' : favBeers }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    favBeers: state.favBeersReducer.favBeers,
    loading: state.favBeersReducer.loading
  }
}

export default connect(mapStateToProps, { getFavBeers })(Favorites);
