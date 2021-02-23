import { useEffect, useState } from "react";
import BasicLayout from "../layouts/BasicLayout";
import * as gameApi from '../api/game'
import { size } from "lodash";

export default function Home() {
  const [games, setGames] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await gameApi.getLastGames(20);
      if(size(response) > 0) setGames(response);
      setGames([])
    })()
  }, [input])
  return (
    <BasicLayout>
      <h1>Hola desde el children</h1>
    </BasicLayout>
  )
}
