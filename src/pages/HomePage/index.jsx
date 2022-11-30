import React, { useEffect, useState } from "react";
import axios from "axios";

import BigPoster from "../../components/BigPoster";
import CategorySlide from "../../components/CategorySlide";

const categoryData = [
  "action",
  "adventure",
  "cars",
  "comedy",
  "crime",
  "dementia",
];

const HomePage = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios
      .get("https://637c33cc72f3ce38ea9ce6a2.mockapi.io/Category")
      .then((res) => {
        setCategoryList([...res.data]);
      });
  }, []);

  console.log("Category List: ", categoryList);
  return (
    <div className="home-page">
      <BigPoster />
      {categoryData.map((element) => (
        <CategorySlide categoryName={element} />
      ))}
    </div>
  );
};

export default HomePage;
