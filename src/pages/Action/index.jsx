import React, { useEffect, useState } from "react";
import { Button, Dropdown, Menu, Space, Card, Image } from "antd";
import axios from "axios";
import { PlayCircleOutlined } from "@ant-design/icons";

import "./style.css";

const items = [
  { key: "name-asc", label: "Ascending" },
  { key: "name-dsc", label: "Descending" },
];

const ActionAnime = ({ actionImg }) => {
  return (
    <Card
      bordered={false}
      style={{
        position: "relative",
        margin: "20px",
        width: "calc(100%/5)",
      }}
      bodyStyle={{ padding: "0" }}
    >
      <Image src={actionImg} preview={false} />
      <a
        href=""
        style={{
          display: "block",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
        }}
      ></a>
      <PlayCircleOutlined />
    </Card>
  );
};

const Action = () => {
  const [actionList, setActionList] = useState([]);

  useEffect(() => {
    axios.get("https://gogoanime.consumet.org/genre/action").then((res) => {
      console.log(res.data);
      setActionList([...res.data]);
    });
  }, []);

  const onClick = (event) => {
    console.log(event);
    setActionList(
      [...actionList].sort((a, b) => {
        if (event.key === "name-asc") {
          const nameA = a.animeTitle.toUpperCase();
          const nameB = b.animeTitle.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        } else {
          const nameA = a.animeTitle.toUpperCase();
          const nameB = b.animeTitle.toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        }
      })
    );
  };

  return (
    <div className="action">
      <h1>Action Anime</h1>
      <div className="poster-container">Top Action Anime</div>
      <Dropdown
        menu={{
          items,
          onClick,
        }}
        trigger={["click"]}
      >
        <Button
          style={{
            display: "block",
            margin: "20px 20px 0 20px",
            marginLeft: "auto",
          }}
        >
          Sort by Name
        </Button>
      </Dropdown>
      <div className="action-anime-list-container">
        {actionList.map((element) => (
          <ActionAnime key={element.animeId} actionImg={element.animeImg} />
        ))}
      </div>
    </div>
  );
};

export default Action;
