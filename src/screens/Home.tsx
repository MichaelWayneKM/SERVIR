import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import DisplayHome from "../components/DisplayHome";
import Header from "../components/Header";
import NewsOverviewHome from "../components/NewsOverviewHome";
import ServiceComponents from "../components/ServiceComponents";
import "../styles/Home.css";

function Home() {
  const [displayShown, setDisplayShown] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 700) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 1100) {
          setDisplayShown(false);
        } else {
          if (!displayShown) {
            setDisplayShown(true);
          }
        }
      });
    }

    return window.removeEventListener('scroll', () => null)
  }, [displayShown]);

  return (
    <div id="home">
      {displayShown ? <DisplayHome /> : null}
      <Carousel />
      <ServiceComponents />
      <NewsOverviewHome />
    </div>
  );
}

export default React.memo(Home);
