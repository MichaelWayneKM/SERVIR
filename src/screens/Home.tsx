import React from "react";
import Carousel from "../components/Carousel";
import DisplayHome from "../components/DisplayHome";
import Header from "../components/Header";
import "../styles/Home.css";

function Home() {
  return (
    <div id="home" className="container">
      
      <Header />
      <DisplayHome />
      <div style={{ height: 2000}} />
    </div>
  );
}

export default Home;
