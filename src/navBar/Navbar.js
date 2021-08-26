import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Group5 from "../Group5.png";

// and

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <div className="menu-bar">
          <div>
            <FontAwesomeIcon icon={faBars} size="2x" color="whitesmoke" />
          </div>
          <div style={{ color: "white" }}>Menu</div>
        </div>
        <div className="logo">
          <img src={Group5} />
        </div>
      </div>
      <div className="secDiv">
        <div className="search">
          <div>
            <FontAwesomeIcon icon={faSearch} size="2x" color="white" />
          </div>
          <div style={{ color: "white" }}>Search</div>
        </div>
        <div className="logout">
          <div>
            <FontAwesomeIcon icon={faSignOutAlt} size="2x" color="white" />
          </div>
          <div style={{ color: "white" }}>Log out</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
