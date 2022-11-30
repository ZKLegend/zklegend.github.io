import React from "react";
import { useState } from "react";

import { Route, Routes, Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="left-header">
        <Link to="/" className="home-navigation">
          MY ANIME
        </Link>
        <Link to="/tvshow">Drama</Link>
        <Link to="/movies">Movie</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/mylist">My List</Link>
      </div>
      <div className="right-header">
        <Link className="register-nav" to="/register">
          Register
        </Link>
        <Link className="login-nav" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
