import React from "react";
import { Button, Grid, Icon, Image } from "semantic-ui-react";

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

  return (
    <>
      <div className="header-game__title">
        {title}
        <Icon name="heart outline" link />
      </div>
      <div className="header-game__delivery">
        Entrega entre 24-48 Horas
      </div>
      <div
        className="header-game__summary"
        dangerouslySetInnerHTML={{ __html: summary }}
      />
      <div className="header-game__buy">
        <div className="header-game__buy-price">
          <p>Precio de venta al p&uacute;blico: {price}$</p>
          <div className="header-game__buy-price-actions">
            <p>-{discount}%</p>
            <p>{price-Math.floor(price*discount)/100}$</p>
          </div>
        </div>
        <Button className='header-game__buy-btn'><Icon name='cart plus'/> Comprar</Button>
      </div>
    </>
  );
}

export default Header;
