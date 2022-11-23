import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

const CategorySlideItem = () => {
  return <div className="category-slide-item">Cat 1 - Movie 1</div>;
};

const CategorySlide = ({ categoryName }) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios
      .get("https://637c33cc72f3ce38ea9ce6a2.mockapi.io/AnimeList")
      .then((res) => {
        setItemList([...res.data]); 
      });
  }, []);
 
  return (
    <div className="category-slide">
      <h2 className="category-name">{categoryName}</h2>
      <div className="category-slide-container">
        <CategorySlideItem />
        {/* {itemList.map((element) => (
          <CategorySlideItem image={element.image} />
        ))} */}
      </div>
    </div>
  );
};

export default CategorySlide;
