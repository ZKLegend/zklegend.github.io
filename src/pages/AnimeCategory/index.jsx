import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Menu, Space, Card, Image } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PlayCircleFilled } from "@ant-design/icons";

import "./style.css";

const items = [
  { key: "name-asc", label: "Ascending" },
  { key: "name-dsc", label: "Descending" },
];

const AnimeCategoryList = ({ animeImg, animeId, categoryName }) => {
  return (
    <Card
      bordered={false}
      style={{
        position: "relative",
        margin: "20px",
        width: "calc(100%/5)",
      }}
      // bodyStyle={{ padding: "0" }}
    >
      <Image src={animeImg} preview={false} style={{ width: "100%" }} />
      <Link
        to={`/${categoryName}/${animeId}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
        }}
      >
        <PlayCircleFilled style={{ fontSize: "40px" }} />
      </Link>
    </Card>
  );
};

const AnimeCategory = () => {
  const [animeList, setAnimeList] = useState([]);
  const params = useParams();
  console.log("Params:", params.categoryName);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    axios
      .get(`https://gogoanime.consumet.org/genre/${params.categoryName}`)
      .then((res) => {
        console.log("Data:", res.data);
        setAnimeList([...res.data]);
      });
  }, []);

  const onClick = (event) => {
    console.log(event);
    setAnimeList(
      [...animeList].sort((a, b) => {
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
    <div className="anime-category">
      <h1>{capitalizeFirstLetter(params.categoryName)} Anime</h1>
      <div className="poster-container">Top {params.categoryName} Anime</div>
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
      <div className="anime-category-list-container">
        {animeList.map((element) => (
          <AnimeCategoryList
            key={element.animeId}
            animeImg={element.animeImg}
            animeId={element.animeId}
            categoryName={params.categoryName}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimeCategory;
