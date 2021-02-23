import { map } from "lodash";
import Link from "next/link";
import React from "react";
import { Grid, Image } from "semantic-ui-react";

const GamesList = ({ games }) => {
  return (
    <div className="list-games">
      <Grid>
        <Grid.Row columns={5}>
          {map(games, (game) => (
            <Game key={game.id} game={game}/>
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
            <Image src={game.poster.url} alt={game.title}/>
            <div className="list-games__game-poster-info">
              {game.discount ? (
                <span className='discount'>-{game.discount}%</span>
              ) : ''}
              <span className='price'>{game.price}$</span>
            </div>
          </div>
          <h2>{game.title}</h2>
        </a>
      </Link>
    </Grid.Column>
  );
}

export default GamesList;
