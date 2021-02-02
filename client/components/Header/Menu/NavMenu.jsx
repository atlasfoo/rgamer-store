import Link from "next/link";
import React, { useState } from "react";
import { Container, Grid, Icon, Menu } from "semantic-ui-react";
import BasicModal from "../../Modal/BasicModal";

export default function NavMenu() {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => setShowModal(true);

  return (
    <nav className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlatforms />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <MenuOptions onShowModal={onShowModal} />
          </Grid.Column>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        title="Inicia Sesi&oacute;n"
        size="small"
      >
        <h2>Modal</h2>
      </BasicModal>
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

function MenuOptions({ onShowModal }) {
  return (
    <Menu>
      <Menu.Item onClick={onShowModal}>
        <Icon name="user outline" /> Mi cuenta
      </Menu.Item>
    </Menu>
  );
}
