import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import * as UserApi from "../api/user";
import useAuth from "../hooks/useAuth";
import ChangeNameForm from "../components/Account/ChangeNameForm";

const Account = () => {
  const [user, setUser] = useState(undefined);
  const router = useRouter();
  const { session, logout } = useAuth();

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
      <Configuration />
    </BasicLayout>
  );
};

const Configuration = ({user}) => {
  return (
    <section className="account__configuration">
      <div className="title">Configuraci&oacute;n</div>
      <div className="data">
        <ChangeNameForm user={user}/>
      </div>
    </section>
  );
};

export default Account;
