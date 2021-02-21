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
import { FORM_ACTIONS } from "../utils/consts";

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

  const openModal = (title, address) => {
    setTitleModal(title);
    setShowModal(true);
    console.log(address);
    setFormModal(
      <AddressForm
        setShowModal={setShowModal}
        setReloadAddress={setReloadAddress}
        action={address ? FORM_ACTIONS.UPDATE : FORM_ACTIONS.CREATE}
        address={address || null}
      />
    );
  };

  return (
    <section className="account__addresses">
      <div className="title">
        Direcciones
        <Icon name="plus" link onClick={() => openModal("Nueva direccion")} />
      </div>
      <div className="data">
        <AddressList
          reloadAddress={reloadAddress}
          setReloadAddress={setReloadAddress}
          openModal={openModal}
        />
      </div>
      <BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
        {formModal}
      </BasicModal>
    </section>
  );
}
