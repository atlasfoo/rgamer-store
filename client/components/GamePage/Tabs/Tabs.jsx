import React from "react";
import { Tab } from "semantic-ui-react";
import { GameVideo, ImagesCarousel } from "./TabItems";

const Tabs = ({ game }) => {

  const { video, snapshots } = game;

  const panes = [
    {
      menuItem: "Trailer Oficial",
      render: () => <GameVideo videoUrl={video} />,
    },
    {
      menuItem: "Capturas de Pantalla",
      render: () => <ImagesCarousel title={"xd"} images={snapshots} />,
    },
  ];

  return <Tab className="tabs-game" panes={panes} />;
};

export default Tabs;
