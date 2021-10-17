import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../../../Hooks/useProducts";
import FilterProducts from "./FilterProducts";
import { HouseDoorFill } from "react-bootstrap-icons";
const AllProducts = () => {
  const { products } = useProducts();
  return (
    <Container className="my-5">
      <FilterProducts products={products} />
      <div className="text-center">
        <Link to="/">
          <button className="my-btn mt-5 btn btn-danger">
            <HouseDoorFill />
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default AllProducts;
