import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/components/Carousel.css";
import { Button } from '@mui/material';

const carrouselData = [
  {
    imageUrl: require("../assets/images/banner3.png"),
    masterTitle: "RCMRD Space Challenge",
    linkTo: "https://mysite.com/",
    paragraph: `
    SERVIR E&SA introduced an activity dubbed “RCMRD Space Challenge”
    meant to enlighten primary and secondary school children on some
    of the causes and drivers of climate change by enabling them to
    participate in weather data collection and analysis link
    `,
  },
  {
    imageUrl: require("../assets/images/banner4.png"),
    masterTitle: "RCMRD Space Challenge",
    linkTo: "https://mysite.com/",
    paragraph: `
    SERVIR E&SA introduced an activity dubbed “RCMRD Space Challenge”
    meant to enlighten primary and secondary school children on some
    of the causes and drivers of climate change by enabling them to
    participate in weather data collection and analysis link
    `,
  },
  {
    imageUrl: require("../assets/images/banner5.png"),
    masterTitle: "RCMRD Space Challenge",
    linkTo: "https://mysite.com/",
    paragraph: `
    SERVIR E&SA introduced an activity dubbed “RCMRD Space Challenge”
    meant to enlighten primary and secondary school children on some
    of the causes and drivers of climate change by enabling them to
    participate in weather data collection and analysis link
    `,
  },
  {
    imageUrl: require("../assets/images/banner6.jpg"),
    masterTitle: "RCMRD Space Challenge",
    linkTo: "https://mysite.com/",
    paragraph: "<b>SERVIR E&SA</b> introduced an activity dubbed “RCMRD Space Challenge” meant to enlighten primary and secondary school children on some of the causes and drivers of climate change by enabling them to participate in weather data collection and analysis link",
  },
];

function CarouselDisplay() {
  return (
    <div>
      <h1 id="section-title">Highlights</h1>
      <Carousel autoPlay infiniteLoop swipeable={false}>
        {carrouselData.map((highlight) => (
          <div id="carousell-disp-child">
            <img id="carousell-disp-imx" src={highlight.imageUrl} />
            <div id="carousell-disp-contx">
              <h2>{highlight.masterTitle}</h2>
              <p>{highlight.paragraph}</p>

              <Button variant="outlined">Read more</Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselDisplay;
