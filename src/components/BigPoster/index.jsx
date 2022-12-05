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
const { Paragraph } = Typography;

const BigPoster = () => {
  const [ellipsis, setEllipsis] = useState(true);

  // Lấy Data Recent Release Anime
  const [recentRelease, setRecentRelease] = useState([]);
  useEffect(() => {
    const getRecentAnime = async () => {
      const response = await axios.get(
        `https://gogoanime.consumet.org/recent-release`
      );
      setRecentRelease([...response.data]);
    };
    getRecentAnime();
  }, []);
  console.log("Recent Release Anime: ", recentRelease);

  // Dùng AnimeId từ recentRelease để lấy AnimeDetail
  // const [animeId, setAnimeId] = useState([]);
  // useEffect(() => {
  //   recentRelease.map((element) => setAnimeId([element.animeId]));
  // }, []);
  // console.log("Anime ID: ", animeId);

  return (
    <div className="home-page">
      <Carousel autoplay={true} dots={false}>
        {recentRelease.map((element) => (
          <Row>
            <Col span={24} style={{ position: "relative", height: "100%" }}>
              <Col
                span={8}
                style={{
                  zIndex: "1",
                  position: "absolute",
                  backgroundColor: "rgb(0 0 0 / 35%)",
                  height: "100%",
                }}
              >
                <Descriptions
                  column={1}
                  title={element.animeTitle}
                  contentStyle={{ color: "white" }}
                  labelStyle={{ color: "white" }}
                >
                  <Descriptions.Item label="Type">TV Series</Descriptions.Item>
                  <Descriptions.Item label="Release Date">
                    2022
                  </Descriptions.Item>
                  <Descriptions.Item label="Status">Ongoing</Descriptions.Item>
                  <Descriptions.Item label="Genre">
                    Advanture, Slice of Life
                  </Descriptions.Item>
                  <Descriptions.Item label="Description">
                    <Paragraph
                      style={{ color: "white" }}
                      ellipsis={
                        ellipsis
                          ? {
                              rows: 3,
                              expandable: true,
                              symbol: "more",
                            }
                          : false
                      }
                    >
                      The sole surviving human and her canine companion, Haru,
                      wander a desolate wasteland after the destruction of
                      civilization, but this is no dark doomsday tale. Haru, a
                      wise-beyond-his-years talking shiba inu, makes sure his
                      master stays one step ahead of post-apocalyptic pessimism
                      with his clever antics, hilarious observations and
                      philosophical ponderings. She may be the last girl on
                      earth, but with Haru at her side, the road through the
                      apocalypse will never be boring!
                    </Paragraph>
                  </Descriptions.Item>
                  <Descriptions.Item
                    contentStyle={{ justifyContent: "center" }}
                  >
                    <Link to="">
                      <Button>Watch Anime</Button>
                    </Link>
                  </Descriptions.Item>
                </Descriptions>
              </Col>

              <Image
                src={element.animeImg}
                height={500}
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

export default BigPoster;
