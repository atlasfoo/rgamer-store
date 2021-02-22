import React from "react";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";
import { useRouter } from 'next/router'

const platform = () => {
  const {query} = useRouter();

  return (
    <BasicLayout className="platform">
      <h1>Estamos en plataformas: {query.platform}</h1>
    </BasicLayout>
  );
};

export default platform;
