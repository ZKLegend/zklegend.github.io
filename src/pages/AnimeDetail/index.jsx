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
      const response2 = await axios.get(
        `https://gogoanime.consumet.org/vidcdn/watch/${
          episodeInfo.reverse()[0]
        }`
      );
      setStreamingURL(response2.data.Referer);
      setEpisodeId([...episodeInfo.reverse()]);
      setAnimeDetail({ ...response.data });
    };
    getAnimeDetail();
  }, []);

  console.log("Anime Detail: ", animeDetail);
  console.log("Episode Id list: ", episodeId);
  console.log("Streaming URL: ", streamingURL);

  return (
    <div>
      <Row style={{ minHeight: 600 }}>
        <Col style={{ color: "white" }} span={16} offset={4}>
          <iframe
            height="100%"
            width="100%"
            style={{ border: "none", position: "absolute" }}
            src={streamingURL}
            scrolling="no"
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col style={{ border: "1px solid white" }} span={16} offset={4}>
          <Title level={2} style={{ color: "white", marginTop: "auto" }}>
            {animeDetail.animeTitle} - Episode 1
          </Title>
        </Col>
      </Row>
      <Row>
        <Col style={{ border: "1px solid white" }} span={16} offset={4}>
          <Link to="/">
            <Button>Episode 1</Button>
          </Link>
        </Col>
      </Row>
      <Row>
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
