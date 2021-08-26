import React from "react";

export const Prod = ({ products }) => {
  return (
    <div>
      {products.map((prod, ind) => {
        return (
          <div className="product" key={ind}>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`${prod.image}`}
                    className="img-fluid rounded-start"
                    alt="..."
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{prod.title}</h5>
                    <p className="card-text">
                      This is a short line of placeholder copy.{" "}
                    </p>
                    <p className="card-text">
                      <h4 className="text-danger">
                        {prod.points.basePointsToCharge} Points
                      </h4>
                    </p>
                    <p className="card-text">
                      <h4 className="text-muted text-decoration-line-through">
                        {prod.points.originalBasePointsToCharge} Points
                      </h4>
                    </p>
                    <button type="button" class="btn btn-danger">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
