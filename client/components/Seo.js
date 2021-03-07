import React from "react";
import Head from "next/head";

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
};

Seo.defaultProps = {
  title: "RGAMER",
  description: "Ofertones en juegos como nadie",
};

export default Seo;
