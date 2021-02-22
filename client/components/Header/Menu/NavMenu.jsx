import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Container, Grid, Icon, Menu } from "semantic-ui-react";
import useAuth from "../../../hooks/useAuth";
import Auth from "../../Auth";
import BasicModal from "../../Modal/BasicModal";

import * as platformApi from "../../../api/platform";
import { getMe } from "../../../api/user";
import _ from "lodash";

export default function NavMenu() {
  const [platforms, setPlatforms] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("Iniciar sesión");
  const [user, setUser] = useState(undefined);

  const { session, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getMe(logout);
      setUser(response);
    })();
  }, [session]);

  useEffect(() => {
    (async () => {
      const response = await platformApi.getAll();
      console.log(response);
      setPlatforms(response);
    })();
  }, []);

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  return (
    <nav className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlatforms platforms={platforms} />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            {user !== undefined && (
              <MenuOptions
                onShowModal={onShowModal}
                user={user}
                logout={logout}
              />
            )}
          </Grid.Column>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        title={titleModal}
        size="small"
      >
        <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
      </BasicModal>
    </nav>
  );
}

function MenuPlatforms({ platforms }) {
  return (
    <Menu>
      {_.map(platforms, (platform) => {
        <Link href={`/games/${platform.url}`} key={platform._id}>
          <Menu.Item as="a" name={platform.url}>
            {platform.title}
          </Menu.Item>
        </Link>;
      })}
    </Menu>
  );
}

function MenuOptions({ onShowModal, user, logout }) {
  return (
    <Menu>
      {user ? (
        <>
          <Link href="/orders">
            <Menu.Item as="a">
              <Icon name="game" />
              Mis pedidos
            </Menu.Item>
          </Link>
          <Link href="/wishlist">
            <Menu.Item as="a">
              <Icon name="heart outline" />
              Lista de deseos
            </Menu.Item>
          </Link>
          <Link href="/account">
            <Menu.Item as="a">
              <Icon name="user outline" />
              {user?.name} {user?.lastname}
            </Menu.Item>
          </Link>
          <Link href="/cart">
            <Menu.Item as="a" className="m-0">
              <Icon name="cart arrow down" />
            </Menu.Item>
          </Link>
          <Menu.Item onClick={logout}>
            <Icon name="power off" />
          </Menu.Item>
        </>
      ) : (
        <Menu.Item onClick={onShowModal} className="m-0">
          <Icon name="user outline" /> Mi cuenta
        </Menu.Item>
      )}
    </Menu>
  );
}
