import { Button, Drawer, SwipeableDrawer } from "@mui/material";
import "../styles/components/Sidebar.css";
import React from "react";
import Hamburger from "hamburger-react";
import { HamburgerMenu } from "./Header";
import { RootState } from "../core/redux/store";
import { useSelector } from "react-redux";

function Sidebar() {
  
  const state = useSelector((state: RootState) => state.globalState);

  return (
    <div className={`sidebar ${state.sidebarActive ? 'open' : 'closed'}`} style={{ width: `${state.sidebarActive ? "100%" : "0%"}`}}>
      <div></div>
      <nav>
        <HamburgerMenu keyID="sm-hamburger-menu" color="#212121" my={20} mx={20} />
        <div className="navitem">Home</div>
        <div className="navitem">ABOUT SERVIR</div>
        <div className="navitem">NEWS & EVENTS</div>
        <div className="navitem">SERVICE AREAS</div>
        <div className="navitem">GRANTS</div>
        <div className="navitem">OPEN DAY</div>
        <div className="navitem">MEDIA</div>
        <div className="navitem">CONTACT US</div>
      </nav>
    </div>
  );
}

export default Sidebar;
