import { Pagination } from "@mui/material";
import React from "react";

const NewsItem = () => {
    return (
        <div className={"news-item-home"}>
            <img src={require("../assets/images/area2.jpg")} />
            <h3>Example news one Header for news components</h3>

            <div id="specifics-news-item">
                <a href="#">Read more</a>
            </div>
        </div>
    )
}


function NewsOverviewHome() {
  return (
    <div id="newsOverviewHome">
      <div className="news">
        <span>
          <div id="section-title" style={{ marginTop: 10, marginLeft: 28 }}>
            Latest News
          </div>
        </span>
        <NewsItem />
        <NewsItem />
        <Pagination style={{ margin: 35 }} count={10} variant="outlined" color="primary" />
      </div>
      <div className="upcoming"></div>
      <div className="quick-links"></div>
    </div>
  );
}

export default NewsOverviewHome;
