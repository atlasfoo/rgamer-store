import React, { useEffect, useState } from "react";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import { useRouter } from "next/router";

import * as gameApi from "../api/game";
import { Header, Tabs } from "../components/GamePage";
import { Loader } from "semantic-ui-react";
import Seo from "../components/Seo";

const Game = () => {
  const { query } = useRouter();

  const [game, setGame] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await gameApi.getGameByUrl(query.game);
      setGame(response[0]);
    })();
  }, [query]);

  return (
    <BasicLayout className="game">
      <Seo title={game?.title}/>
      {!game && <Loader active>Cargando Juego</Loader>}
      {game && (
        <>
          <Header game={game} />
          <Tabs game={game} />
        </>
      )}
    </BasicLayout>
  );
};

export default Game;
