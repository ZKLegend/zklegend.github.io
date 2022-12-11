import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Image,
  Carousel,
  Row,
  Col,
  Descriptions,
  Button,
  Typography,
} from "antd";
const { Title, Paragraph, Text } = Typography;

const BigPoster = () => {
  const [ellipsis, setEllipsis] = useState(true);

  // Lấy Data Recent Release Anime
  const [recentRelease, setRecentRelease] = useState([]);
  const [animeDetail, setAnimeDetail] = useState([]);
  useEffect(() => {
    const tempData = [];
    const getRecentAnime = async () => {
      const response = await axios.get(
        `https://gogoanime.consumet.org/recent-release`
      );
      setRecentRelease([...response.data]);
      response.data.map((element) => {
        const getAnimeDetail = async () => {
          const response2 = await axios.get(
            `https://gogoanime.consumet.org/anime-details/${element.animeId}`
          );
          tempData.push(response2.data);
          setAnimeDetail([...tempData]);
        };
        getAnimeDetail();
      }, []);
    };
    getRecentAnime();
  }, []);

  return (
    <div className="big-poster">
      <Carousel
        autoplay={true}
        dots={false}
        style={{ height: "500px", width: "100%" }}
      >
        {animeDetail.map((element, index) => (
          <Row>
            <Col span={24} style={{ position: "relative" }}>
              <Row>
                <Col
                  span={10}
                  style={{
                    position: "absolute",
                    zIndex: "1",
                    height: "500px",
                    backgroundColor: "#322d2d7a",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <Title style={{ color: "white" }}>{element.animeTitle}</Title>
                  <Paragraph
                    style={{
                      color: "white",
                      textAlign: "center",
                      padding: "0 30px",
                    }}
                    ellipsis={
                      ellipsis
                        ? { rows: 2, expandable: true, symbol: "more" }
                        : false
                    }
                  >
                    {element.synopsis}
                  </Paragraph>

                  <Link to={`${recentRelease[index].animeId}/1`}>
                    <Button style={{ display: "block", margin: "auto" }}>
                      Wach Anime
                    </Button>
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  {" "}
                  <Image
                    src={element.animeImg}
                    preview={false}
                    height={500}
                    width={"100%"}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Carousel>
    </div>
  );
};

export default BigPoster;
