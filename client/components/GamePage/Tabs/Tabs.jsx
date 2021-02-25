import React from 'react'
import { Tab } from 'semantic-ui-react';

const Tabs = ({game}) => {

  const {} = game;

  const panes = [
    {
      menuItem: "Información",
      render: () => <Tab.Pane>
        <h1>Info Game</h1>
      </Tab.Pane>
    },
    {
      menuItem: "Lista de Comentarios",
      render: () => <Tab.Pane>
        <h1>Comentarios Game</h1>
      </Tab.Pane>
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
