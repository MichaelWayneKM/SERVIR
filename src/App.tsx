import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import NewsAndEvents from "./screens/NewsAndEvents";
import NotFound404 from "./screens/NotFound404";
import Signin from "./screens/Signin";

import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "./core/redux/store";
import Administration from "./screens/Administration";

const Header = React.lazy(() => import("./components/Header"));
const Sidebar = React.lazy(() => import("./components/Sidebar"));
const About = React.lazy(() => import("./screens/About"));
const Home = React.lazy(() => import("./screens/Home"));

function App() {

  

  return (
    <Suspense fallback={<div>~</div>}>
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

   

      <Header />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Signin />} />
        <Route path="events" element={<NewsAndEvents />} />
        <Route path="/admin" element={<Administration />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>

      <Footer />
    </Suspense>
  );
}

export default App;
