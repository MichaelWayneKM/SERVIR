import React from "react";
import Carousel from "../components/Carousel";
import DisplayHome from "../components/DisplayHome";
import Header from "../components/Header";
import NewsOverviewHome from "../components/NewsOverviewHome";
import ServiceComponents from "../components/ServiceComponents";
import "../styles/Home.css";


function Home() {
  return (
    <div id="home">
      <DisplayHome />
      <Carousel />
      <ServiceComponents />
      <NewsOverviewHome />
    </div>
  );
}

export default React.memo(Home);
