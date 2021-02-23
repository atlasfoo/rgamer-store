import { useEffect, useState } from "react";
import BasicLayout from "../layouts/BasicLayout";
import * as gameApi from "../api/game";
import { size } from "lodash";
import { Loader } from "semantic-ui-react";
import GamesList from "../components/GamesList/GamesList";

export default function Home() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await gameApi.getLastGames(20);
      if (size(response) > 0) setGames(response);
      else setGames([]);
    })();
  }, []);

  return (
    <BasicLayout className="home">
      {!games && <Loader active>Cargando juegos</Loader>}
      {games && size(games) === 0 && (
        <div>
          <h3>No hay juegos disponibles</h3>
        </div>
      )}
      {size(games) > 0 && <GamesList games={games}/> }
    </BasicLayout>
  );
}
