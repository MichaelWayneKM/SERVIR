import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import NewsAndEvents from "./screens/NewsAndEvents";
import NotFound404 from "./screens/NotFound404";
import Signin from "./screens/Signin";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";

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

      <div
        className="snack"
        style={{
          backgroundColor: "#3D3D3D",
          position: "fixed",
          top: 450,
          right: -36,
          transform: "rotate(-90deg)",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 2,
          opacity: 0.5
        }}
      >
        <Button>
          <div className="icon-x">
            <AccountCircleIcon style={{ color: "white", margin: 5 }} />
          </div>
          <div className="label" style={{ color: "white", margin: 5 }}>
            Guest
          </div>
        </Button>
      </div>

      <Header />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Signin />} />
        <Route path="events" element={<NewsAndEvents />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>

      <Footer />
    </Suspense>
  );
}

export default App;
