import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBar__home}>
        <Link to="/" style={{ all: "unset" }}>
          HOME
        </Link>
      </div>
      <ul className={styles.navBar__lists}>
        <li>
          <Link to="/now-playing" style={{ all: "unset" }}>
            now playing
          </Link>
        </li>
        <li>
          <Link to="/upcoming" style={{ all: "unset" }}>
            upcoming
          </Link>
        </li>
        <li>
          <Link to="/popular" style={{ all: "unset" }}>
            popular
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
