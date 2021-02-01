import Link from "next/link";
import React from "react";
import { Container, Grid, Icon, Menu } from "semantic-ui-react";

export default function NavMenu() {
  return (
    <nav className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlatforms />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <MenuOptions />
          </Grid.Column>
        </Grid>
      </Container>
    </nav>
  );
}

function MenuPlatforms() {
  return (
    <Menu>
      <Link href="/play-station">
        <Menu.Item as="a">PlayStation</Menu.Item>
      </Link>
      <Link href="/xbox">
        <Menu.Item as="a">Xbox</Menu.Item>
      </Link>
      <Link href="/switch">
        <Menu.Item as="a">Switch</Menu.Item>
      </Link>
    </Menu>
  );
}
function MenuOptions() {
  return (
    <Menu>
      <Menu.Item>
        <Icon name="user outline" /> Mi cuenta
      </Menu.Item>
    </Menu>
  );
}
