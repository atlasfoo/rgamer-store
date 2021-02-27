import React, { useEffect, useState } from "react";
import { Button, Grid, Icon, Image } from "semantic-ui-react";
import { size } from "lodash";
import moment from "moment";
import classNames from "classnames";
import "moment/locale/es";

import * as favoritesApi from "../../../api/favorite";
import useAuth from "../../../hooks/useAuth";

const Header = ({ game }) => {
  const { poster, title } = game;

  return (
    <Grid className="header-game">
      <Grid.Column mobile={16} tablet={6} computer={5}>
        <Image src={poster.url} alt={title} fluid />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={10} computer={11}>
        <InfoGame game={game} />
      </Grid.Column>
    </Grid>
  );
};

function InfoGame({ game }) {
  const { title, summary, price, discount } = game;

  const { session, logout } = useAuth();

  const [isFavorite, setIsFavorite] = useState(false);

  const addFavorite = () => {
    console.log("agregar a favoritos");
  };

  const removeFavorite = () => {
    console.log("remover de favoritos");
  };

  useEffect(() => {
    (async () => {
      const response = await favoritesApi.isFavorite(
        session.user_id,
        game.id,
        logout
      );
      if (size(response) > 0) setIsFavorite(true);
      else setIsFavorite(false);
    })();
  }, []);

  return (
    <>
      <div className="header-game__title">
        {title}
        <Icon
          name={isFavorite ? "heart" : "heart outline"}
          className={classNames({
            like: isFavorite,
          })}
          link
          onClick={ isFavorite ? removeFavorite : addFavorite }
        />
      </div>
      <div className="header-game__delivery">Entrega entre 24-48 Horas</div>
      <div
        className="header-game__summary"
        dangerouslySetInnerHTML={{ __html: summary }}
      />
      <div className="header-game__buy">
        <div className="header-game__buy-price">
          <p>Precio de venta al p&uacute;blico: {price}$</p>
          <div className="header-game__buy-price-actions">
            <p>-{discount}%</p>
            <p>{price - Math.floor(price * discount) / 100}$</p>
          </div>
        </div>
        <Button className="header-game__buy-btn">
          <Icon name="cart plus" /> Comprar
        </Button>
      </div>
      <div className="header-game__date">
        <h4>Fecha de lanzamiento:</h4>
        <p>{moment(game.releaseDate).format("LL")}</p>
      </div>
    </>
  );
}

export default Header;
