import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Typography } from "antd";

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
    <div className="home-page">
      <Row>
        <Col
          span={16}
          offset={4}
          style={{ border: "1px solid white", height: "500px" }}
        ></Col>
        {categoryData.map((element) => (
          <Col span={16} offset={4}>
            <CategorySlide categoryName={element} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
