import React from "react";
import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <div style={{ padding: 150, display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div
        style={{
          fontSize: 50,
          fontWeight: "bold",
        }}
      >
        404: Page Not Found
      </div>
      <Link to="/" >Home</Link>
    </div>
  );
}

export default NotFound404;
