import React, { useEffect, useState } from "react";
import { Col, Divider, Row, Card, Typography, Button } from "antd";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const { Title } = Typography;

const AnimeDetail = () => {
  const [animeDetail, setAnimeDetail] = useState({});
  const [streamingURL, setStreamingURL] = useState();
  const [episodeId, setEpisodeId] = useState([]);
  const params = useParams();

  // Lấy Episode ID
  useEffect(() => {
    const getAnimeDetail = async () => {
      const episodeInfo = [];
      const response = await axios.get(
        `https://gogoanime.consumet.org/anime-details/${params.animeId}`
      );
      response.data.episodesList.map((element) =>
        episodeInfo.push(element.episodeId)
      );
      setEpisodeId([...episodeInfo.reverse()]);
      setAnimeDetail({ ...response.data });
    };
    getAnimeDetail();
  }, []);

  // Lấy Episode URL tập đầu tiên
  const getStreamingURL = async () => {
    const response = await axios.get(
      `https://gogoanime.consumet.org/vidcdn/watch/${episodeId[0]}`
    );
    setStreamingURL(response.data.Referer);
    getStreamingURL();
  };

  console.log("Anime Detail: ", animeDetail);
  console.log("Episode Id list: ", episodeId);
  console.log("Streaming URL: ", streamingURL);

  return (
    <div>
      <Row>
        <Col
          style={{ border: "1px solid white", color: "white", height: "500px" }}
          span={16}
          offset={4}
        >
          {/* <iframe
            height="100%"
            width="100%"
            style={{ border: "none" }}
            src={streamingURL}
          ></iframe> */}
        </Col>
        <Col style={{ border: "1px solid white" }} span={16} offset={4}>
          <Title level={2} style={{ color: "white", marginTop: "auto" }}>
            {animeDetail.animeTitle} - Episode 1
          </Title>
        </Col>
        <Col style={{ border: "1px solid white" }} span={16} offset={4}>
          <Title level={5} style={{ marginTop: "auto", color: "white" }}>
            Choose Episode
          </Title>
        </Col>
        <Col style={{ border: "1px solid white" }} span={16} offset={4}>
          <Link to="">
            <Button>Test Link</Button>
          </Link>
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
