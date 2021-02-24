import { map } from "lodash";
import Link from "next/link";
import React from "react";
import { Grid, Image } from "semantic-ui-react";
import useWindowSize from "../../hooks/useWindowSize";
import { Breakpoints } from "../../utils/breakpoints";

const GamesList = ({ games }) => {
  const { width } = useWindowSize();

  const getColumnsRender = () => {
    switch (true) {
      case width > Breakpoints.lg:
        return 5;

      case width > Breakpoints.md:
        return 3;

      case width > Breakpoints.sm:
        return 2;

      default:
        return 1;
    }
  };

  return (
    <div className="list-games">
      <Grid>
        <Grid.Row columns={getColumnsRender()}>
          {map(games, (game) => (
            <Game key={game.id} game={game} />
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

function Game({ game }) {
  return (
    <Grid.Column className="list-games__game">
      <Link href={`/${game.url}`}>
        <a>
          <div className="list-games__game-poster">
            <Image src={game.poster.url} alt={game.title} />
            <div className="list-games__game-poster-info">
              {game.discount ? (
                <span className="discount">-{game.discount}%</span>
              ) : (
                ""
              )}
              <span className="price">{game.price}$</span>
            </div>
          </div>
          <h2>{game.title}</h2>
        </a>
      </Link>
    </Grid.Column>
  );
}

export default GamesList;
