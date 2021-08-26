import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";
import { Prod } from "./Prod";
import { Paginate } from "./Paginate";
import ItemsPerPage from "./ItemsPerPage";

function Products() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(5);
  useEffect(() => {
    axios.get("https://eps-gigya.herokuapp.com/rewardProducts").then((data) => {
      // console.log(data.data);
      setProducts(data.data);
    });
  }, []);

  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Prod products={currentPosts} />
      <ItemsPerPage />
      <Paginate
        productPerPage={productPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Products;
