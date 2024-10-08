import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../utils/common";
import useHeaderColor from "../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import companyimg from "/logos.png"
import addNotification from "react-push-notification";


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

const clickToNotify = ()=>{
addNotification({
  title: 'TheSurgeHomes',
  message: 'Your request has been sent, please check your emails',
  duration: 4000,
  native: true,
  icon: './house.ico'
});
};

  return (
    <section className="h-wrapper" style={{ backgroundColor: "blue" }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img src={companyimg} alt="logo" width={75} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >

            <a href="/home/">Home</a>
            <a href="/housegrid/">Residencies</a>
            <a href="/contact-us/">Contact Us</a>
            <a href="/about/">About</a>
           
            <button onClick={clickToNotify} className="button">
              <a >Contact</a>
            </button>
          
            
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
