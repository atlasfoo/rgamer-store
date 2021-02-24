import React, { useEffect, useState } from "react";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";
import { useRouter } from "next/router";
import * as gameApi from "../../api/game";
import { Loader } from "semantic-ui-react";
import { parseInt, size } from "lodash";
import GamesList from "../../components/GamesList/GamesList";
import Pagination from "../../components/Pagination/Pagination";

const limitPerPage = 5;

const platform = () => {
  const { query } = useRouter();

  const [games, setGames] = useState(null);
  const [totalGames, setTotalGames] = useState(null);

  const getStartItem = () => {
    const currentPages = parseInt(query.page);
    if (!query.page || currentPages === 1) return 0;
    else return currentPages * limitPerPage - limitPerPage;
  };

  useEffect(() => {
    (async () => {
      if (query.platform) {
        const response = await gameApi.getGamesByPlatform(
          query.platform,
          limitPerPage,
          getStartItem()
        );
        setGames(response);
      }
    })();

    return () => setGames(null);
  }, [query]);

  useEffect(() => {
    (async () => {
      const response = await gameApi.getTotalGamesPlatform(query.platform);
      setTotalGames(response);
    })();
  }, [query]);

  return (
    <BasicLayout className="platform">
      {!games && <Loader active>Cargando Juegos</Loader>}

      {games && size(games) === 0 && (
        <div>
          <h3>No hay juegos dispoibles</h3>
        </div>
      )}

      {size(games) > 0 && <GamesList games={games} />}

      {totalGames && (
        <Pagination
          totalGames={totalGames}
          page={query.page ? parent(query.page) : 1}
          limitPerPage={limitPerPage}
        />
      )}
    </BasicLayout>
  );
};

export default platform;
