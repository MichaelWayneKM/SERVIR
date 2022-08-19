import React from "react";
import Carousel from "react-animated-carousel";
import Globe from "react-globe.gl";
import GlobeView from "./GlobeView";
import "../styles/components/DisplayHome.css";
import GlobeCard from "./GlobeCards";

import styled, { keyframes } from 'styled-components';
import { fadeInRight } from "react-animations"

const fadeInAnimation = keyframes`${fadeInRight}`;
function DisplayHome() {
  return (
    <div id="main-home-display">
      <div id="temp-agent" className="webgl-container">
        <GlobeView />

        <div id="globe-view-lambert">
          <Card id="intro-agent-container">
            <h5>Connecting Space to Village</h5>
            <p>
              SERVIR is helping countries in Eastern and Southern Africa Region
              use information provided by Earth observing satellites and
              geospatial technologies to improve environmental management and
              resilience to climate change
            </p>

            <button id="disp-hm-more-about-servir-btn">More about SERVIR</button>
          </Card>

         <GlobeCard /> 
          
        </div>
      </div>

      {/* Carrousel goes here */}
    </div>
  );
}

export default DisplayHome;

const Card = styled.div`
animation: 5s ${fadeInAnimation};
`