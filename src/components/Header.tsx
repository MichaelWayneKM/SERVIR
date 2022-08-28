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

  const [headerPadding, setHeaderPadding] = useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY)
      if (window.scrollY < 100) {
        setHeaderPadding(0);
      } else {
        if (headerPadding != 100) {
          setHeaderPadding(100);
        }
      }
    })
  }, [])
  return (
    <div className={`main-header`} style={{ position: `${headerPadding >= 100 ? "fixed" : "relative"}` }}>
      <div className="header-title">
        <div>SERVIR</div>
        <div>
          <div>Eastern and Southern</div>
          <span>AFRICA</span>
        </div>
      </div>

      <HamburgerMenu keyID="lg-hamburger-menu" my={25} mx={20}/>
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
