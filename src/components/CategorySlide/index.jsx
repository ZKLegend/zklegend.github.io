import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

const CategorySlideItem = ({ image }) => {
  return <div className="category-slide-item">{image}</div>;
};

const CategorySlide = ({ name }) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios
      .get("https://637c33cc72f3ce38ea9ce6a2.mockapi.io/AnimeList")
      .then((res) => {
        setItemList([...res.data]);
        // console.log("ItemList:", itemList);
        // Đoạn log này chưa hiểu sao nó lại chạy hai lần 
      });
  }, []);
  // console.log("ItemList:", itemList);
  return (
    <div className="category-slide">
      <h2 className="category-name">{name}</h2>
      <div className="category-slide-container">
        {itemList.map((element) => (
          <CategorySlideItem image={element.image} />
        ))}
      </div>
    </div>
  );
};

export default CategorySlide;
