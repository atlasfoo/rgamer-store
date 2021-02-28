import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import { useRouter } from "next/router";
import { Loader } from "semantic-ui-react";
import { forEach, parseInt, size } from "lodash";
import GamesList from "../components/GamesList/GamesList";

import * as favoritesApi from "../api/favorite";

const Wishlist = () => {
  const { session, logout } = useAuth();

  const router = useRouter();

  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await favoritesApi.getByUser(session.user_id, logout);
      
      if(response && size(response)>0){
        const gamesList = [];
        forEach(response, (data) => {
          gamesList.push(data.game);
        })
        console.log(gamesList);
        setGames(gamesList);
      }
      else{
        setGames([]);
      }
    })();
  }, []);

  if (!session) {
    router.replace("/");
    return null;
  }

  return (
    <BasicLayout className="wishlist">
      <section className="wishlist__block">
        <div className="title">Lista de deseos</div>
        <div className="data">
          {!games && <Loader active>Cargando Juegos</Loader>}

          {games && size(games) === 0 && (
            <div className='data__not-found'>
              <h3>No hay juegos dispoibles</h3>
            </div>
          )}

          {size(games) > 0 && <GamesList games={games} />}
        </div>
      </section>
    </BasicLayout>
  );
};

export default Wishlist;
