import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import * as gameApi from "../api/game";
import { size } from "lodash";
import { Loader } from "semantic-ui-react";
import GamesList from "../components/GamesList";

const search = () => {
  const { query } = useRouter();

  const [games, setGames] = useState(null);

  // no perder focus del campo en la primera renderizacion
  useEffect(() => {
    document.getElementById("search-game").focus();
  }, []);

  //hacer query
  useEffect(() => {
    (async () => {
      if (size(query["q"]) > 0) {
        const response = await gameApi.searchGamesByTitle(query["q"]);
        if (size(response) > 0) setGames(response);
        else setGames([]);
      } else {
        setGames([]);
      }
    })();
  }, [query]);

  return (
    <BasicLayout className="search">
    {!games && <Loader active>Buscando Juegos</Loader>}

    {games && size(games) === 0 && (
      <div className='data__not-found'>
        <h3>No hay juegos dispoibles</h3>
      </div>
    )}

    {size(games) > 0 && <GamesList games={games} />}
    </BasicLayout>
  );
};

export default search;
