import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Carousel } from "antd";

import "./style.css";

const CategorySlideItem = ({ animeImg }) => {
  return <img src={animeImg} className="category-slide-item" />;
};

const CategorySlide = ({ categoryName }) => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gogoanime.consumet.org/genre/${categoryName}`)
      .then((res) => {
        console.log(res.data);
        setAnimeList([...res.data]);
      });
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="category-slide">
      <div className="link-container">
        <Link to="/genre/action" className="category-name">
          {capitalizeFirstLetter(categoryName)}
        </Link>
      </div>
      <div className="category-slide-container">
        <Carousel>
          {animeList.map((element) => (
            <CategorySlideItem animeImg={element.animeImg} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CategorySlide;
