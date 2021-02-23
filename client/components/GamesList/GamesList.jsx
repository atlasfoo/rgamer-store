import { map } from 'lodash'
import React from 'react'

const GamesList = ({games}) => {
  return (
    <div className='list-games'>
      {map(games, (game) => (<h3>{game.title}</h3>) )}
    </div>
  )
}

export default GamesList
