import { Button, Drawer, SwipeableDrawer } from "@mui/material";
import "../styles/components/Sidebar.css";
import React from "react";
import Hamburger from "hamburger-react";
import { HamburgerMenu } from "./Header";
import { RootState } from "../core/redux/store";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Sidebar() {
  const state = useSelector((state: RootState) => state.globalState);

  const { user } = useSelector((state: RootState) => state.userState);

  React.useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div
      className={`sidebar ${state.sidebarActive ? "open" : "closed"}`}
      style={{ width: `${state.sidebarActive ? "100%" : "0%"}` }}
    >
      <div className="container-sidebar">
        <div className="head-sidebar">
          <div className="head-peek">
            <Button>
              <div className="icon-x">
                <AccountCircleIcon
                  style={{ color: "lightblue", marginLeft: 10 }}
                />
              </div>
              <div
                className="label"
                style={{ color: "blue", fontSize: 10, marginLeft: 10 }}
              >
                {user ? `${user?.email}` : "Guest"}
              </div>
            </Button>
          </div>

          <HamburgerMenu
            keyID="sm-hamburger-menu"
            color="#212121"
            my={20}
            mx={20}
          />
        </div>
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
    </div>
  );
}

export default React.memo(Sidebar);
