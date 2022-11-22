import React, { useEffect, useState } from "react";
import axios from "axios";

import BigPoster from "../../components/BigPoster";
import CategorySlide from "../../components/CategorySlide";

const HomePage = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios
      .get("https://637c33cc72f3ce38ea9ce6a2.mockapi.io/AnimeList")
      .then((res) => {
        console.log("Res:", res);
        console.log(res.data);
        setCategoryList([...res.data]);
      });
  }, []);

//   console.log("Category:", categoryList);

  return (
    <div className="home-page">
      <BigPoster />
      {categoryList.map((element) => (
        <CategorySlide name={element.name} />
      ))}
      {/* Đoạn trên đang bị một lỗi là mỗi khi render ra 1 cái CategorySlide thì nó sẽ gửi API request, vậy có ok không? */}
    </div>
  );
};

export default HomePage;
