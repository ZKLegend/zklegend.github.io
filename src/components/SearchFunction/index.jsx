import { Row, Col, Input } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

import React, { useRef } from "react";
import { useState } from "react";

const { Search } = Input;

const SearchFunction = () => {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const ref = useRef();
  console.log("Ref: ", ref);

  let timeOutId = null;

  const handleSearchInput = (event) => {
    setInput(event.target.value);
    if (timeOutId != null) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      const getSearchResult = async () => {
        const response = await axios.get(
          `https://gogoanime.consumet.org/search?keyw=${event.target.value}`
        );
        setSearchResult([...response.data]);
      };
      getSearchResult();
    }, 1000);
    console.log("TimeOut ID: ", timeOutId);
  };
  console.log("Search Result: ", searchResult);
  // console.log("Input: ", input);

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Search
        style={{ maxWidth: "100%" }}
        placeholder="Search..."
        enterButton
        onChange={handleSearchInput}
        value={input}
      />

      {/* Search Result Section */}
      <div
        ref={ref}
        style={{
          maxWidth: "100%",
          backgroundColor: "white",
          maxHeight: "500px",
          overflow: "auto",
          borderRadius: "10px",
        }}
      >
        {searchResult.length == 0 && input != "" && (
          <div style={{ padding: "0 10px" }}>No Anime Found</div>
        )}
        {searchResult.length > 0 &&
          input != "" &&
          searchResult.map((element) => (
            <Link
              key={element.animeId}
              onClick={() => {
                return setInput("");
              }}
              to={`${element.animeId}/1`}
              style={{
                display: "block",
                padding: "0 10px",
              }}
            >
              {element.animeTitle}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SearchFunction;
