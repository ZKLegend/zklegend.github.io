import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Tvshow from "./pages/TVShow";
import Movies from "./pages/Movies";
import Trending from "./pages/Trending";
import Mylist from "./pages/Mylist";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/tvshow" element={<Tvshow />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/trending" element={<Trending />}/>
      <Route path="mylist" element={<Mylist />}/>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />}/>
    </Routes>
    <Footer />
  </div>
)};

export default App;
