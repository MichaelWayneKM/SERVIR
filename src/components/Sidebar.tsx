import { Button, Drawer, SwipeableDrawer } from "@mui/material";
import "../styles/components/Sidebar.css";
import React from "react";
import Hamburger from "hamburger-react";
import { HamburgerMenu } from "./Header";

function Sidebar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="sidebar open">
      <HamburgerMenu color="#212121" my={20} mx={20}/>

      <nav>
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
