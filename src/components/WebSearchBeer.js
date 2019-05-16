import React from 'react'
import '../stylesheets/list.css';

const WebSearchBeer = (props) => {
  const beer = props.name.split(' ').join('+')
  const url = "http://www.google.com/webhp?#q=" + beer + "&btnI=I"

  return(
      <a href={url} target='_blank' className='button'>I'm Feeling Lucky</a>
  )
}

export default WebSearchBeer
