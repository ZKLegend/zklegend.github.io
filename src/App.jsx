import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Space, Input, Col, Row } from "antd";
import "./style.css";

import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import Trending from "./pages/Trending";
import Mylist from "./pages/Mylist";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AnimeCategory from "./pages/AnimeCategory";
import AnimeDetail from "./pages/AnimeDetail";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const App = () => {
  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <div className="app">
      <Layout className="layout" style={{ backgroundColor: "#263238" }}>
        <Header style={{ position: "sticky", top: "0", zIndex: "1" }}>
          <Row justify="space-between">
            <Col span={8}>
              <Space size={30}>
                <Link to="/" className="home-navigation">
                  MY ANIME
                </Link>
                <Link to="/movies">Movie</Link>
                <Link to="/trending">Trending</Link>
                <Link to="/mylist">My List</Link>
              </Space>
            </Col>
            <Col span={8}>
              <Space size={30}>
                <div style={{ display: "inline-flex" }}>
                  <Search
                    placeholder="Search..."
                    onSearch={onSearch}
                    enterButton
                  />
                </div>
                <Link className="register-nav" to="/register">
                  Register
                </Link>
                <Link className="login-nav" to="/login">
                  Login
                </Link>
              </Space>
            </Col>
          </Row>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="mylist" element={<Mylist />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/:categoryName" element={<AnimeCategory />} />
            <Route path="/:categoryName/:animeId" element={<AnimeDetail />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>Designed by AnhLK</Footer>
      </Layout>
    </div>
  );
};

export default App;
