import React, { useEffect, useState } from "react";
import { Col, Divider, Row, Card, Typography, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

import AnimeInfo from "../../components/AnimeInfo";

const { Title } = Typography;

const AnimeDetail = () => {
  const navigate = useNavigate();
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
      // forceRender();
      setIsLoading(false);
    };
    getAnimeDetail();
  }, [`${params.episodeNumber}`, `${params.animeId}`]);

  console.log("Anime Detail: ", animeDetail);
  console.log("Episode Id list: ", episodeId);
  console.log("Streaming URL: ", streamingURL);
  console.log("Episode List: ", episodesList);

  return (
    <div>
      {/* Anime Stream */}
      {isLoading && (
        <h1>
          <LoadingOutlined style={{ color: "white" }} />
        </h1>
      )}
      {!isLoading && episodesList.length == 0 && (
        <>
          <h1
            style={{ color: "white" }}
          >{`${animeDetail.animeTitle} is not released yet`}</h1>
          <Button
            style={{ display: "block", margin: "auto", marginBottom: "20px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </Button>
        </>
      )}
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
              style={{ border: "1px solid white", padding: "20px 40px" }}
            >
              {animeDetail.type === "Movie" ? (
                <Row>
                  <Col span={24}>
                    <Title
                      level={2}
                      style={{ color: "white", marginTop: "20px" }}
                    >
                      {`${animeDetail.animeTitle}`}
                    </Title>
                  </Col>
                  <Divider style={{ color: "white" }}>Anime Info</Divider>
                  <AnimeInfo animeId={params.animeId} />
                </Row>
              ) : (
                <>
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
                  <Divider style={{ color: "white" }}>Anime Info</Divider>
                  <AnimeInfo animeId={params.animeId} params={params} />
                  <Divider style={{ color: "white" }}>Episode Info</Divider>
                  <Row>
                    <Col span={24}>
                      {episodesList.map((element) => (
                        <Link
                          replace
                          key={params.animeId}
                          style={{ maxWidth: "90px" }}
                          to={`/${params.animeId}/${element.episodeNum}`}
                        >
                          <Button
                            style={{ padding: "0", width: "90px" }}
                          >{`Episode ${element.episodeNum}`}</Button>
                        </Link>
                      ))}
                    </Col>
                  </Row>
                </>
              )}
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default AnimeDetail;
