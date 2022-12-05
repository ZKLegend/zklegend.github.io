import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col, Descriptions } from "antd";

const AnimeInfo = (props) => {
  const [animeDetail, setAnimeDetail] = useState({});
  console.log("Props:", props.animeId);
  useEffect(() => {
    const getAnimeDetail = async () => {
      const response = await axios.get(
        `https://gogoanime.consumet.org/anime-details/${props.animeId}`
      );
      setAnimeDetail({ ...response.data });
    };
    getAnimeDetail();
  }, []);
  console.log("Anime Genre: ", animeDetail.genres);

  return (
    <div>
      <Row>
        <Col span={8}>
          <Descriptions style={{ width: "200px" }} column={1}>
            <Descriptions.Item label="Type">
              {animeDetail.type}
            </Descriptions.Item>
            <Descriptions.Item label="Release Date">
              {animeDetail.releasedDate}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              {animeDetail.status}
            </Descriptions.Item>
            <Descriptions.Item label="Genre">
              {animeDetail.genres}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};

export default AnimeInfo;
