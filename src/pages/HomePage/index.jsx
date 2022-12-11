import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Col, Row, Typography, Spin, Image, Carousel, Button } from "antd";

import BigPoster from "../../components/BigPoster";
import CategorySlide from "../../components/CategorySlide";

const categoryData = [
  "thriller",
  "action",
  "adventure",
  "cars",
  "comedy",
  "dementia",
];

const { Title, Text } = Typography;

const HomePage = () => {
  return (
    <Suspense fallback={<Spin />}>
      <div className="home-page">
        <Row>
          <Col span={16} offset={4}>
            <BigPoster />
          </Col>
        </Row>
        <Row>
          {categoryData.map((element) => (
            <Col key={element} span={16} offset={4}>
              <CategorySlide categoryName={element} />
            </Col>
          ))}
        </Row>
      </div>
    </Suspense>
  );
};

export default HomePage;
