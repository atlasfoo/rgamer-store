import { useEffect, useState } from "react";
import BasicLayout from "../layouts/BasicLayout";
import * as gameApi from "../api/game";
import { parseInt, size } from "lodash";
import { Loader } from "semantic-ui-react";
import GamesList from "../components/GamesList/GamesList";
import { useRouter } from "next/router";
import Pagination from "../components/Pagination/Pagination";

const limitPerPage = 5;

export default function Home() {
  
  const { query } = useRouter();
  const [games, setGames] = useState(null);
  const [totalGames, setTotalGames] = useState(null);

  const getStartItem = () => {
    const currentPages = parseInt(query.page);
    console.log(currentPages);
    if (!query.page || currentPages === 1) return 0;
    else return currentPages * limitPerPage - limitPerPage;
  };

  useEffect(() => {
    (async () => {
      if(query){
        const response = await gameApi.getLastGames(limitPerPage, getStartItem());
        if (size(response) > 0) setGames(response);
        else setGames([]);
      }
    })();

    return () => setGames(null);
  }, [query]);

  useEffect(() => {
    (async () => {
      const response = await gameApi.getTotalGameCount();
      setTotalGames(response);
    })();
  }, [query]);

  return (
    <BasicLayout className="home">
      {!games && <Loader active>Cargando juegos</Loader>}
      {games && size(games) === 0 && (
        <div>
          <h3>No hay juegos disponibles</h3>
        </div>
      )}
      {size(games) > 0 && <GamesList games={games}/> }

      {totalGames ? (
        <Pagination
          totalGames={totalGames}
          page={query.page ? parseInt(query.page) : 1}
          limitPerPage={limitPerPage}
        />
      ) : null}
    </BasicLayout>
  );
}
