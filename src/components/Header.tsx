import React, { useState } from "react";
import "../styles/components/Header.css";
import { Sling as Hamburger } from "hamburger-react";
import { toggleSideBar } from "../core/redux/slices/globalState";
import { useDispatch } from "react-redux";

export const HamburgerMenu = ({
  mx = 0,
  my = 0,
  color = "white",
}: {
  mx?: number;
  my?: number;
  color?: string;
}) => {
  const [isHamburgerOpen, setOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(toggleSideBar());
  }, [isHamburgerOpen]);

  return (
    <div
      style={{
        position: "absolute",
        right: mx,
        top: my,
      }}
    >
      <Hamburger
        color={color}
        toggled={isHamburgerOpen}
        toggle={() => setOpen(!isHamburgerOpen)}
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

      <HamburgerMenu my={20} />
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
