import React from 'react'
import ReactPlayer from 'react-player/lazy'

const GameVideo = ({videoUrl}) => {
  return (
    <div className='game-video'>
      <ReactPlayer className='game-video__player' url={videoUrl} controls/>
    </div>
  )
}

export default GameVideo
