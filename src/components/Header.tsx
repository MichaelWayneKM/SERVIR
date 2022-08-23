import React, { useState } from "react";
import "../styles/components/Header.css";
import { Sling as Hamburger } from "hamburger-react";
import { toggleSideBar } from "../core/redux/slices/globalState";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../core/redux/store";

export const HamburgerMenu = ({
  keyID,
  mx = 0,
  my = 0,
  color = "white",
}: {
  keyID: string;
  mx?: number;
  my?: number;
  color?: string;
}) => {
  const [isHamburgerOpen, setOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.globalState);

  

  return (
    <div
      id={keyID}
      style={{
        position: "absolute",
        right: mx,
        top: my,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Hamburger
        color={color}
        toggled={state.sidebarActive}
        toggle={() => dispatch(toggleSideBar())}
      />
    </div>
  );
};

function Header() {
  return (
    <div className="main-header">
      <div className="header-title">
        <div>SERVIR</div>
        <div>
          <div>Eastern and Southern</div>
          <span>AFRICA</span>
        </div>
      </div>

      <HamburgerMenu keyID="lg-hamburger" my={20} mx={20}/>
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

export default Header;
