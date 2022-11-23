import React, { useEffect, useState } from "react";
import axios from "axios";

import BigPoster from "../../components/BigPoster";
import CategorySlide from "../../components/CategorySlide";

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
      {categoryList.map((element) => (
        <CategorySlide categoryName={element.categoryName} />
      ))}
      {/* Đoạn trên đang bị một lỗi là mỗi khi render ra 1 cái CategorySlide thì nó sẽ gửi API request, vậy có ok không? */}
    </div>
  );
};

export default HomePage;
