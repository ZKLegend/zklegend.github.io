import React, { useRef } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Carousel, Row, Col, Image, Space } from "antd";
import {
  PlayCircleFilled,
  RightCircleFilled,
  LeftCircleFilled,
} from "@ant-design/icons";

import "./style.css";

const CategorySlide = ({ categoryName }) => {
  const [animeList, setAnimeList] = useState([]);
  const ref = useRef();

  useEffect(() => {
    axios
      .get(`https://gogoanime.consumet.org/genre/${categoryName}`)
      .then((res) => {
        setAnimeList([...res.data]);
      });
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
        dotPosition="top"
        slidesToShow={5}
        slidesToScroll={5}
        style={{ height: "250px" }}
        ref={ref}
      >
        {animeList.map((element) => (
          <Col style={{ border: "1px solid white" }}>
            <Link
              to={`/${categoryName}/${element.animeId}`}
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
            >
              <PlayCircleFilled style={{ fontSize: "60px" }} />
            </Link>
            <Image
              src={element.animeImg}
              height={250}
              width={"100%"}
              preview={false}
            />
          </Col>
        ))}
      </Carousel>
    </div>
  );
};

export default CategorySlide;
