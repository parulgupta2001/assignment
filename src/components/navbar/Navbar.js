import "./navbar.css";
import { useState } from "react";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoIosFootball } from "react-icons/io";
import { BsFillKeyFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <div className="navigation-options">
          <div className="logo">D</div>
          <div>LEARN</div>
          <div>BLOG</div>
          <div>BOOKMARKS</div>
          <div>UI KIT</div>
          <div>LAIN NYA</div>
        </div>
        <div className="social-media-links">
          <TfiTwitter className="icon" />
          <AiOutlineInstagram className="icon" />
          <IoIosFootball className="icon" />
          <BsFillKeyFill className="icon" />
        </div>
      </div>

      <div className="responsive-navigation-option">
        <div className="logo">D</div>
        <GiHamburgerMenu
          className="drawer"
          onClick={() => setMenu((prev) => !prev)}
        />
      </div>
      {menu && (
        <ul className="drawer-menu">
          <li>LEARN</li>
          <li>BLOG</li>
          <li>BOOKMARKS</li>
          <li>UI KIT</li>
          <li>LAIN NYA</li>
        </ul>
      )}
    </>
  );
}
