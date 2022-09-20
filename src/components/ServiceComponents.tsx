import React from "react";

function ServiceComponents() {
  return (
    <>
      <h1 id="section-title">Service Areas</h1>
      <div id="section-body-serviceAreas">
        <div id="service-area">
          <img src={require("../assets/images/agriculture&food-security.jpeg")} alt="area1" />
          <div className="sa-ca-label"><div>Agriculture and Food security</div></div>
        </div>
        <div id="service-area">
          <img src={require("../assets/images/landuse-land-cover.jpeg")} alt="area1" />
          <div className="sa-ca-label"><div>Land Use Land Cover and Ecosystems</div></div>
        </div>
        <div id="service-area">
          <img src={require("../assets/images/water&water-related-disasters.jpeg")} alt="area1" />
          <div className="sa-ca-label"><div>Water Resources And Hydro-Climatic Disaster</div></div>
        </div>
        <div id="service-area">
          <img src={require("../assets/images/weather&climate.jpeg")} alt="area1" />
          <div className="sa-ca-label"><div>Weather & Climate</div></div>
        </div>
      </div>
    </>
  );
}

export default React.memo(ServiceComponents);
