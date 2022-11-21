import React from "react";
import { useState } from "react";

import { Route, Routes, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import "./style.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => {
      return !prev;
    });
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <div className="left-header">
        <Link to="/" className="home-navigation" >
          MY ANIME
        </Link>
        <Link to="/tvshow">TV Show</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/mylist">My List</Link>
      </div>
      <div className="right-header">
        <div className="search-container">
          <div className="search-icon-wrapper">
             <SearchIcon className="search-icon" />
          </div>
          <input className="search-bar" type="text" placeholder="Search..." />
        </div>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="language-container">
            <button
              className="language-btn"
              type="button"
              onClick={handleClick}
            >
              Language
            </button>
            {open ? (
              <div className="dropdown-items">
                <div>English</div>
                <div>VietNam</div>
                <div>Japanese</div>
              </div>
            ) : null}
          </div>
        </ClickAwayListener>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
