import React, { useEffect, useState } from "react";
import { Link, useSearchParams, useParams } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Dropdown,
  Menu,
  Space,
  Card,
  Image,
  Popover,
  Pagination,
} from "antd";
import { PlayCircleFilled, LoadingOutlined } from "@ant-design/icons";

import "./style.css";
import AnimeInfo from "../../components/AnimeInfo";

const items = [
  { key: "name-asc", label: "Ascending" },
  { key: "name-dsc", label: "Descending" },
];

// Component tạo Card Anime
const AnimeCategoryList = ({ animeTitle, animeImg, animeId }) => {
  return (
    <Popover
      content={<AnimeInfo animeId={animeId} />}
      title={animeTitle}
      placement="right"
      arrowPointAtCenter
    >
      <Card
        bordered={false}
        style={{
          position: "relative",
          margin: "20px",
          width: "calc(100%/5)",
        }}
      >
        <Image src={animeImg} preview={false} style={{ width: "100%" }} />
        <Link
          to={`/${animeId}/1`}
          className="link-container"
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
          <PlayCircleFilled style={{ fontSize: "60px" }} className="play-btn" />
        </Link>
      </Card>
    </Popover>
  );
};

const AnimeCategory = () => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Lấy dữ liệu Anime theo từng genre
  useEffect(() => {
    const getAnimeByGenre = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://gogoanime.consumet.org/genre/${params.categoryName}`
      );
      setAnimeList([...response.data]);
      setIsLoading(false);
    };
    getAnimeByGenre();
  }, []);

  // Sắp xếp theo tên Anime
  const onClick = (event) => {
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

  // Chuyển trang show Anime các trang tiếp theo
  const handlePageChange = (pageNumber) => {
    setSearchParams({ page: pageNumber });
    const showDatabyPage = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://gogoanime.consumet.org/genre/${params.categoryName}?page=${pageNumber}`
      );
      setAnimeList([...response.data]);
      setIsLoading(false);
    };
    showDatabyPage();
  };

  return (
    <div className="anime-category">
      <h1 style={{ color: "white" }}>
        {capitalizeFirstLetter(params.categoryName)} Anime
      </h1>
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
      {isLoading && (
        <h1>
          <LoadingOutlined style={{ color: "white", fontSize: "40px" }} />
        </h1>
      )}
      {!isLoading && animeList.length > 0 && (
        <div className="anime-category-list-container">
          {animeList.map((element) => (
            <AnimeCategoryList
              key={element.animeId}
              animeTitle={element.animeTitle}
              animeImg={element.animeImg}
              animeId={element.animeId}
              categoryName={params.categoryName}
            />
          ))}
        </div>
      )}
      <Pagination
        onChange={handlePageChange}
        style={{ textAlign: "center" }}
        defaultCurrent={1}
        total={50}
      />
    </div>
  );
};

export default AnimeCategory;
