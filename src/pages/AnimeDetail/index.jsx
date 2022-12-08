import React, { useEffect, useState } from "react";
import { Col, Divider, Row, Card, Typography, Button } from "antd";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const { Title } = Typography;

const AnimeDetail = () => {
  const [animeDetail, setAnimeDetail] = useState({});
  const [episodesList, setEpisodesList] = useState([]);
  const [streamingURL, setStreamingURL] = useState("");
  const [episodeId, setEpisodeId] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  console.log("Params: ", params.episodeNumber);

  // Lấy AnimeDetail => Lấy EpisodeId => Lấy EpisodeURL
  useEffect(() => {
    const getAnimeDetail = async () => {
      setIsLoading(true);
      const episodeInfo = [];
      const response = await axios.get(
        `https://gogoanime.consumet.org/anime-details/${params.animeId}`
      );
      response.data.episodesList.map((element) =>
        episodeInfo.push(element.episodeId)
      );
      // Lấy Episode ID
      setEpisodeId([...episodeInfo.reverse()]);
      // Lấy Anime Detail
      setAnimeDetail({ ...response.data });
      // Lấy Episode List
      setEpisodesList([...response.data.episodesList.reverse()]);

      // Lấy Episode URL
      const response2 = await axios.get(
        `https://gogoanime.consumet.org/vidcdn/watch/${
          episodeInfo[params.episodeNumber - 1]
        }`
      );
      setStreamingURL(response2.data.Referer);
      setIsLoading(false);
    };
    getAnimeDetail();
  }, []);

  console.log("Anime Detail: ", animeDetail);
  console.log("Episode Id list: ", episodeId);
  console.log("Streaming URL: ", streamingURL);
  console.log("Episode List: ", episodesList);

  return (
    <div>
      {/* Anime Stream */}
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && episodesList.length == 0 && <h1>No Episode List</h1>}
      {!isLoading && episodesList.length > 0 && (
        <div>
          <Row style={{ minHeight: 800 }}>
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

          {/* Anime Info */}
          <Row>
            <Col
              span={16}
              offset={4}
              style={{ border: "1px solid white", padding: "0 40px" }}
            >
              <Row>
                <Col span={24}>
                  <Title
                    level={2}
                    style={{ color: "white", marginTop: "auto" }}
                  >
                    {`${animeDetail.animeTitle} - Episode ${params.episodeNumber}`}
                  </Title>
                </Col>
              </Row>
              <Divider style={{ color: "white" }}>Episode Info</Divider>
              <Row>
                <Col span={24}>
                  {episodesList.map((element) => (
                    <a
                      style={{ maxWidth: "90px" }}
                      href={`/${params.animeId}/${element.episodeNum}`}
                    >
                      <Button
                        style={{ padding: "0", width: "90px" }}
                      >{`Episode ${element.episodeNum}`}</Button>
                    </a>
                  ))}
                </Col>
              </Row>
              <Divider style={{ color: "white" }}>Related Anime</Divider>
              <Row>
                <Col span={24}>
                  <Title
                    level={5}
                    style={{ marginTop: "auto", color: "white" }}
                  >
                    Related Anime
                  </Title>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default AnimeDetail;
