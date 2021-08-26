import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RelatedItems.css";

export const RelatedItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://eps-gigya.herokuapp.com/rewardProducts").then((data) => {
      console.log(data.data);
      setProducts(data.data);
    });
  }, []);
  return (
    <>
      <div className="mt-3 container border-bottom">
        <h1>Related Items</h1>

        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {products &&
              products.map(
                (a, i) =>
                  (i === 0 && (
                    <div key={i} className="carousel-item active">
                      <img src={a.image} className="d-block w" alt="img" />

                      <p>{a.title}</p>

                      <p className="fw-bold text-primary">
                        {a.points.basePointsToCharge} Points
                      </p>
                    </div>
                  )) || (
                    <div key={i} className="carousel-item">
                      <img src={a.image} className="d-block w" alt="img" />
                      <p>{a.title}</p>
                      <p className="fw-bold text-primary">
                        {a.points.basePointsToCharge} Points
                      </p>{" "}
                    </div>
                  )
              )}
          </div>
        </div>
      </div>

      <div className="mt-3 container">
        <h1>Recently Viewed Items</h1>

        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {products &&
              products.map(
                (a, i) =>
                  (i === 0 && (
                    <div key={i} className="carousel-item active">
                      <img src={a.image} className="d-block w" alt="img" />

                      <p>{a.title}</p>

                      <p className="fw-bold text-primary">
                        {a.points.basePointsToCharge} Points
                      </p>
                    </div>
                  )) || (
                    <div key={i} className="carousel-item">
                      <img src={a.image} className="d-block w" alt="img" />

                      <p>{a.title}</p>

                      <p className="fw-bold text-primary">
                        {a.points.basePointsToCharge} Points
                      </p>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </>
  );
};
