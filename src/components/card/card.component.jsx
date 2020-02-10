import React from 'react';
import './card.styles.css'

const Card = (props) => {
  return(
    <div className='card-container'>
      <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&180x180`}></img>
      <h1 className='card-container'>{props.monster.name}</h1>
      <p>{ props.monster.email }</p>
    </div>
    
  )
    
}

export default Card;