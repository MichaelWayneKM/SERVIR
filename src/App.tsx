import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <div
        className="sponsors"
        style={{
          height: 100,
          display: "flex",
          alignItems: "center",
          paddingRight: 50,
          justifyContent: "space-between",
          position: "static",
        }}
      >
        <img width="20%" src="https://rcmrd.org/images/logo/rcmrd_logo.png" />
        <img
          width="20%"
          src="https://rcmrd.org/images/headers/Servir_Logo_Full_Color_Africa_Large.png"
        />
        <img
          width="20%"
          src="https://rcmrd.org/images/headers/usaid1.png"
          alt=""
        />
        <img
          width="8%"
          src="https://rcmrd.org/images/headers/logo3.png"
          alt=""
        />
      </div>

      <Home />

      <Sidebar />
    </>
  );
}

export default App;
