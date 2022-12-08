import React, { useRef } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Carousel,
  Row,
  Col,
  Image,
  Space,
  Card,
  Popover,
  Descriptions,
  Typography,
} from "antd";
import {
  PlayCircleFilled,
  RightCircleFilled,
  LeftCircleFilled,
} from "@ant-design/icons";

import "./style.css";
import AnimeInfo from "../AnimeInfo";

const CategorySlide = ({ categoryName }) => {
  const [animeList, setAnimeList] = useState([]);
  const displayRef = useRef();
  const ref = useRef();

  useEffect(() => {
    const getAnimebyGenre = async () => {
      const response = await axios.get(
        `https://gogoanime.consumet.org/genre/${categoryName}`
      );
      setAnimeList([...response.data]);
    };
    getAnimebyGenre();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="category-slide">
      <Row align="middle" style={{ height: "56px" }} justify="space-between">
        <Col>
          <Link to={`/${categoryName}`} className="category-name">
            {capitalizeFirstLetter(categoryName)} Anime
          </Link>
        </Col>
        <Col>
          <Space>
            <LeftCircleFilled
              style={{ color: "white", fontSize: "20px" }}
              onClick={() => {
                ref.current.prev();
              }}
            />
            <RightCircleFilled
              style={{ color: "white", fontSize: "20px" }}
              onClick={() => {
                ref.current.next();
              }}
            />
          </Space>
        </Col>
      </Row>
      <Carousel
        slidesToShow={5}
        slidesToScroll={5}
        style={{ height: "250px" }}
        ref={ref}
        dots={false}
      >
        {animeList.map((element) => (
          <Row>
            <Col>
              <Popover
                content={<AnimeInfo animeId={element.animeId} />}
                title={element.animeTitle}
                placement="right"
                arrowPointAtCenter
              >
                <Link
                  onMouseLeave={() => {}}
                  to={`/${element.animeId}/1`}
                  style={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    width: "100%",
                    height: "100%",
                    zIndex: "1",
                  }}
                  className="link-container"
                >
                  <PlayCircleFilled
                    style={{ fontSize: "60px" }}
                    className="play-btn"
                  />
                </Link>
              </Popover>
              <Image
                src={element.animeImg}
                height={250}
                width={"100%"}
                preview={false}
              />
            </Col>
          </Row>
        ))}
      </Carousel>
    </div>
  );
};

export default CategorySlide;
