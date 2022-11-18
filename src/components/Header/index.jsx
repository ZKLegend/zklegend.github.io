import React from "react";
import { useState } from "react";

import { Route, Routes } from "react-router-dom";
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
        <a className="home-navigation" href="">
          MY ANIME
        </a>
        <a href="">TV Show</a>
        <a href="">Movies</a>
        <a href="">Trending</a>
        <a href="">My List</a>
      </div>
      <div className="right-header">
        <form className="search-container">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            name="search"
          />
          <button type="submit">
            <SearchIcon className="search-icon" />
          </button>
        </form>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="language-container">
            <button className="language-btn" type="button" onClick={handleClick}>
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
        <a href="">Register</a>
        <a href="">Login</a>
      </div>
    </div>
  );
};

export default Header;
