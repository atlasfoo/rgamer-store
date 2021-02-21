import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import * as UserApi from "../api/user";
import useAuth from "../hooks/useAuth";
import {
  ChangeNameForm,
  ChangeEmailForm,
  ChangePasswordForm,
  AddressForm,
} from "../components/Account";
import { Icon } from "semantic-ui-react";
import BasicModal from "../components/Modal/BasicModal";
import AddressList from "../components/Account/AddressList";

const Account = () => {
  const [user, setUser] = useState(undefined);
  const router = useRouter();
  const { session, logout, setReloadUser } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await UserApi.getMe(logout);
      setUser(response || null);
    })();
  }, [session]);

  if (user === undefined) return null;

  if (!session && !user) {
    router.replace("/");
    return null;
  }

  return (
    <BasicLayout className="account">
      <Configuration
        user={user}
        logout={logout}
        setReloadUser={setReloadUser}
      />

      <Addresses />
    </BasicLayout>
  );
};

const Configuration = ({ user, logout, setReloadUser }) => {
  return (
    <>
      <section className="account__configuration">
        <div className="title">Configuraci&oacute;n</div>
        <div className="data">
          <ChangeNameForm
            user={user}
            logout={logout}
            setReloadUser={setReloadUser}
          />
          <ChangeEmailForm
            user={user}
            logout={logout}
            setReloadUser={setReloadUser}
          />
          <ChangePasswordForm user={user} logout={logout} />
        </div>
      </section>
    </>
  );
};

export default Account;

function Addresses() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [formModal, setFormModal] = useState(null);
  const [reloadAddress, setReloadAddress] = useState(false);

  const openModal = (title) => {
    setTitleModal(title);
    setShowModal(true);
    setFormModal(<AddressForm setShowModal={setShowModal} setReloadAddress={setReloadAddress} />);
  };

  return (
    <section className="account__addresses">
      <div className="title">
        Direcciones
        <Icon name="plus" link onClick={() => openModal("Nueva direccion")} />
      </div>
      <div className="data">
        <AddressList reloadAddress={reloadAddress} setReloadAddress={setReloadAddress} />
      </div>
      <BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
        {formModal}
      </BasicModal>
    </section>
  );
}
