import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Space,
  Input,
  Col,
  Row,
  Avatar,
  Button,
  Popover,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";

import HomePage from "./pages/HomePage";
import Movie from "./pages/Movie";
import Trending from "./pages/Trending";
import Mylist from "./pages/Mylist";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AnimeCategory from "./pages/AnimeCategory";
import AnimeDetail from "./pages/AnimeDetail";
import SearchFunction from "./components/SearchFunction";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const userDropDown = (
    <>
      <Button
        onClick={() => {
          setIsLogin(false);
        }}
      >
        Log out
      </Button>
    </>
  );

  return (
    <div className="app">
      <Layout className="layout" style={{ backgroundColor: "#263238" }}>
        <Header
          style={{
            position: "sticky",
            top: "0",
            zIndex: "1",
          }}
        >
          <Row align="center" gutter={40}>
            <Col span={12}>
              <Space size={30}>
                <Link to="/" className="home-navigation">
                  MY ANIME
                </Link>
                <Link to="/anime-movies">Movie</Link>
                <Link to="/trending">Trending</Link>
                <Link to="/mylist">My List</Link>
              </Space>
            </Col>
            <Col span={6} offset={3}>
              <SearchFunction />
            </Col>
            <Col span={3}>
              {isLogin ? (
                <Popover
                  placement="bottom"
                  trigger="click"
                  content={userDropDown}
                >
                  {" "}
                  <Avatar
                    size="large"
                    icon={<UserOutlined />}
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      cursor: "pointer",
                    }}
                  />
                </Popover>
              ) : (
                <Space size={30}>
                  <Link className="register-nav" to="/register">
                    Register
                  </Link>
                  <Link className="login-nav" to="/login">
                    Login
                  </Link>
                </Space>
              )}
            </Col>
          </Row>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/anime-movies" element={<Movie />} />
            <Route path="/trending" element={<Trending />} />
            <Route
              path="mylist"
              element={<Mylist isLogin={isLogin} setIsLogin={setIsLogin} />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
            />
            <Route path="/:categoryName" element={<AnimeCategory />} />
            <Route path="/:animeId/:episodeNumber" element={<AnimeDetail />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>Designed by AnhLK</Footer>
      </Layout>
    </div>
  );
};

export default App;
