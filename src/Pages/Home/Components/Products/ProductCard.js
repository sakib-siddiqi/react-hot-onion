import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, price, img } = product;
  return (
    <Col xm={12} md={6} lg={4}>
      <Link to={`/products/${title}`}>
        <Card className="border-0 product-card pt-5">
          <Card.Img
            variant="top"
            src={`./${img}`}
            className="img-fluid product-img mx-auto mb-3"
            loading="lazy"
          />
          <Card.Body className="text-center">
            <h6 className="m-0 l-s-1 text-dark">{title}</h6>
            <small className="my-1 text-secondary l-s-1">
              How we dream about our future
            </small>
            <h5 className="mb-3 l-s-1 text-dark mt-3">$ {price}</h5>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
