import "./navbar.css";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoIosFootball } from "react-icons/io";
import { BsFillKeyFill } from "react-icons/bs";

export function Navbar() {
  return (
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
  );
}
