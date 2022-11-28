import React, { useEffect, useState } from "react";
import axios from "axios";

import BigPoster from "../../components/BigPoster";
import CategorySlide from "../../components/CategorySlide";

const categoryData = ["action",
  "adventure",
  "cars",
  "comedy",
  "crime",
  "dementia",
  "demons",
  "drama",
  "ecchi",
  "family",
  "fantasy",
  "game",
  "gourmet",
  "harem",
  "historical",
  "horror",
  "josei",
  "kids",
  "magic",
  "martial-arts",
  "mecha",
  "military",
  "mystery",
  "parody",
  "police",
  "psychological",
  "romance",
  "samurai",
  "school",
  "sci-fi",
  "seinen",
  "shoujo",
  "shoujo-ai",
  "shounen",
  "shounen-ai",
  "space",
  "sports",
  "super-power",
  "supernatural",
  "suspense",
  "thriller",
  "vampire",
  "yaoi",
  "yuri"]

const HomePage = () => {
  const [categoryList, setCategoryList] = useState([]);

  

  useEffect(() => {
    axios
      .get("https://637c33cc72f3ce38ea9ce6a2.mockapi.io/Category")
      .then((res) => {
        setCategoryList([...res.data]);
      });
  }, []);

  console.log(categoryList)
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
