import React, { useEffect, useState } from "react";
import { Col, Divider, Row, Card, Typography } from "antd";
import axios from "axios";

const { Title } = Typography;

const AnimeDetail = () => {
  const [comedyList, setComedyList] = useState([]);
  const [streamingURL, setStreamingURL] = useState();

  useEffect(() => {
    const getStreamingURL = async () => {
      const response = await axios.get(
        "https://gogoanime.consumet.org/vidcdn/watch/kancolle-itsuka-ano-umi-de-episode-1"
      );
      console.log("Streaming URL Response: ", response.data.Referer);
      setStreamingURL(response.data.Referer);
    };
    getStreamingURL();
  }, []);

  useEffect(() => {
    const getComedyList = async () => {
      const response = await axios.get(
        "https://gogoanime.consumet.org/genre/comedy"
      );
      setComedyList([...response.data]);
    };
    getComedyList();
  }, []);

  return (
    <div>
      <Row gutter={[0, 16]}>
        <Col
          style={{ border: "1px solid white", color: "white", height: "500px" }}
          span={16}
          offset={4}
        >
          <iframe
            height="100%"
            width="100%"
            style={{ border: "none" }}
            src={streamingURL}
          ></iframe>
        </Col>
        <Col style={{ border: "1px solid white" }} span={16} offset={4}>
          <Title level={2} style={{ color: "white", marginTop: "auto" }}>
            Anime Name - Episode 1
          </Title>
        </Col>
        <Col style={{ border: "1px solid white" }} span={16} offset={4}>
          <Title level={5} style={{ marginTop: "auto", color: "white" }}>
            Choose Episode
          </Title>
        </Col>
        <Col style={{ border: "1px solid white" }} span={16} offset={4}>
          <Title level={5} style={{ marginTop: "auto", color: "white" }}>
            Related Anime
          </Title>
        </Col>
      </Row>
    </div>
  );
};

export default AnimeDetail;
