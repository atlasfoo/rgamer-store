import React, { useEffect, useState } from 'react'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import { useRouter } from 'next/router'

import * as gameApi from '../api/game'

const Game = () => {

  const {query} = useRouter();

  const [game, setGame] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await gameApi.getGameByUrl(query.game);
      setGame(response[0]);
    })()
  }, [query]);

  return (
    <BasicLayout className='game'>
      <h1>Estamos en {query.game}</h1>
    </BasicLayout>
  )
}

export default Game
