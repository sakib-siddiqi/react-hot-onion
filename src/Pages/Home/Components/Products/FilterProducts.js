import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
const FilterProducts = ({ products }) => {
  return (
    <Row className="g-4">
      {products.map((filtered) => (
        <ProductCard product={filtered} key={filtered.id} />
      ))}
    </Row>
  );
};

export default FilterProducts;
