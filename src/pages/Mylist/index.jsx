import React from "react";
import { Link } from "react-router-dom";

const Mylist = (props) => {
  return (
    <>
      {!props.isLogin ? (
        <h1 style={{ color: "white" }}>
          Please <Link to="/login">login</Link> first
        </h1>
      ) : (
        <h1 style={{ color: "white" }}>THIS IS MY LIST PAGE</h1>
      )}
    </>
  );
};

export default Mylist;
