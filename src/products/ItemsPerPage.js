import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemsPerPage = () => {
  return (
    <div>
      <p className="d-flex justify-content-end m-4 text-primary">
        Items per page : <span className="text-danger">12 </span>
        <span> | 25 |</span>
        <span> 50 |</span>
        <span> 100</span>
      </p>
    </div>
  );
};

export default ItemsPerPage;
