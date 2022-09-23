import { Pagination, Paper } from "@mui/material";
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
  );
};

const EventItem = () => {
  return (
    <Paper elevation={1}>
      <div className="event-item">
        <div className="dateHolder">
          <div id="day">21</div>
          <div id="month-yr">
            <div id="month">September</div>
            <div id="year">2022</div>
          </div>
        </div>
        <hr />
        <div className="event-title-home">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi natus
          hic minus, ex nemo ullam ea dignissimos laudantium. Odit corporis
          voluptatibus sed soluta sunt voluptatem enim molestias maxime,
          corrupti cumque.
        </div>
      </div>
    </Paper>
  );
};
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
        
        <Pagination
          style={{ margin: 25 }}
          count={10}
          variant="outlined"
          color="primary"
          size="small"
        />
        
      </div>
      <div className="upcoming">
        <div id="section-title">Upcoming Events</div>
        <EventItem />
        <EventItem />
        <EventItem />
        
      </div>
      <div className="quick-links">
        <div className="section-title" style={{ marginTop: 50, marginLeft: 10 }}></div>
      </div>
    </div>
  );
}

export default React.memo(NewsOverviewHome);
