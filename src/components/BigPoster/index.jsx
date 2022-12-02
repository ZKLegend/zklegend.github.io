import React, { useEffect, useState } from "react";
import axios from "axios";

import { Image, Carousel, Row, Col, Descriptions } from "antd";

const BigPoster = () => {
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
  return (
    <div className="home-page">
      <Carousel
        //   autoplay={true}
        dots={false}
      >
        {recentRelease.map((element) => (
          <Row>
            <Col span={24} style={{ position: "relative" }}>
              <Descriptions
                title="Test"
                style={{ zIndex: "1", position: "absolute" }}
              >
                <Descriptions.Item label="Type">TV Series</Descriptions.Item>
              </Descriptions>
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
