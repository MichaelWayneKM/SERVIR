import React from "react";
import Carousel from "react-animated-carousel";
import Globe from "react-globe.gl";
import GlobeView from "./GlobeView";
import "../styles/components/DisplayHome.css";

function DisplayHome() {
  return (
    <div id="main-home-display">
      <div id="temp-agent" className="webgl-container">
        <GlobeView />

        <div id="globe-view-lambert">
          <div id="intro-agent-container">
            <h5>Connecting Space to Village</h5>
            <p>
              SERVIR is helping countries in Eastern and Southern Africa Region
              use information provided by Earth observing satellites and
              geospatial technologies to improve environmental management and
              resilience to climate change
            </p>

            <button id="disp-hm-more-about-servir-btn">More about servir</button>
          </div>

          
        </div>
      </div>

      {/* Carrousel goes here */}
    </div>
  );
}

export default DisplayHome;
