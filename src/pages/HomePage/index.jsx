import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import axios from "axios";
import { Col, Row, Typography, Spin } from "antd";

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

const HomePage = () => {
  return (
    <Suspense fallback={<Spin />}>
      <div className="home-page">
        <Row>
          <Col span={16} offset={4} style={{ height: "500px" }}>
            <BigPoster />
          </Col>
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
