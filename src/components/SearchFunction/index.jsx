import { Row, Col, Input } from "antd";
import axios from "axios";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const { Search } = Input;

const SearchFunction = () => {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const getSearchResult = async () => {
      const response = await axios.get(
        `https://gogoanime.consumet.org/search?keyw=${input}`
      );
      console.log("Response: ", response.data);
      setSearchResult([...response.data]);
    };
    getSearchResult();
  }, [input]);

  console.log("Search Result: ", searchResult);

  // const onSearch = (value) => {
  //   console.log("Value: ", value);
  // };

  const handleChange = (event) => {
    console.log("Value: ", event.target.value);
    setInput(event.target.value);
  };

  return (
    <>
      <Row style={{ marginRight: "40px" }}>
        <Col span={24}>
          <div style={{ display: "inline-flex" }}>
            <Search
              placeholder="Search..."
              // onSearch={onSearch}
              enterButton
              onChange={handleChange}
              value={input}
            />
          </div>
          <div className="data-result">
            {searchResult.map((element) => (
              <a href="" style={{ display: "block" }}>
                {element.animeTitle}
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SearchFunction;
