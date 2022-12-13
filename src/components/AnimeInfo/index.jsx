import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Descriptions, Typography } from "antd";

const AnimeInfo = (props) => {
  const [animeDetail, setAnimeDetail] = useState({});
  const [animeGenre, setAnimeGenre] = useState([]);

  useEffect(() => {
    const getAnimeDetail = async () => {
      const response = await axios.get(
        `https://gogoanime.consumet.org/anime-details/${props.animeId}`
      );
      setAnimeDetail({ ...response.data });
      setAnimeGenre([...response.data.genres]);
    };
    getAnimeDetail();
  }, []);

  return (
    <div>
      {props.params.animeId === props.animeId ? (
        <Row>
          <Col span={24}>
            <Descriptions
              style={{ width: "100%", backgroundColor: "white" }}
              column={4}
              bordered
              labelStyle={{
                fontWeight: "600",
              }}
            >
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
                {animeGenre.map((element, index) => (
                  <>
                    {element}
                    <br />
                  </>
                ))}
              </Descriptions.Item>
              <Descriptions.Item label="Description">
                {animeDetail.synopsis}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      ) : (
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
                {animeGenre.map((element) => (
                  <>
                    {element}
                    <br />
                  </>
                ))}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default AnimeInfo;
