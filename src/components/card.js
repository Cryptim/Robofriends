import React from 'react'
import  './card.css'
const Card = ({email,name,id,username}) => {


  return (
    <div className='card'>

    <img src={`https://robohash.org/${id}200x200`} alt='robo'/>
    <div>
    <h1>{username}</h1>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
    </div>
  )
}

export default Card
