import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cameras.css";

function Cameras() {
  const names = [
    "Instant",
    "DSLR",
    "Convenience, Security & Collision Avoidance",
    "Action",
    "Camcorders",
    "Drones",
    "Super Mega Pixel Ultimate Zoom",
    "Wearables",
  ];
  return (
    <div>
      <div className="cameras-head">Cameras</div>
      <div className="container">
        {names.map((data) => {
          return <div className="box">{data}</div>;
        })}
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <span className="more-filter">More Filters</span>
        <span style={{ cursor: "pointer" }}>
          <FontAwesomeIcon icon={faPlusCircle} size="2x" color="red" />
        </span>
      </div>
      <div className="dropdown">
        <button
          class="btn btn-lg btn-outline-dark dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort By : Placeholder
        </button>
      </div>
    </div>
  );
}

export default Cameras;
