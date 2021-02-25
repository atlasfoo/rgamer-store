import React from 'react'
import { Tab } from 'semantic-ui-react';
import { GameVideo, ImagesCarousel } from './TabItems';

const Tabs = ({game}) => {

  console.log(game);

  const {video, snapshots} = game;

  const panes = [
    {
      menuItem: "Trailer Oficial",
      render: () => <GameVideo videoUrl= {video}/>
    },
    {
      menuItem: "Capturas de Pantalla",
      render: () => <ImagesCarousel title={'xd'} images={snapshots}/>
    },
    {
      menuItem: "Información",
      render: () => <Tab.Pane>
        <h1>Info Game</h1>
      </Tab.Pane>
    },
  ]

  return (
    <Tab className='tabs-game' panes={panes}/>
  )
}

export default Tabs
