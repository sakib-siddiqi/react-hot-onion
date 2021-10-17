import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useProducts from "../../../../Hooks/useProducts";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
const ProductsDetails = () => {
  const { searchProduct } = useParams();
  const { products } = useProducts();
  const thisProduct = products.find(
    (product) => product.title === searchProduct
  );
  console.log(thisProduct);
  return (
    <Container>
      <Row>
        {/* ------------- */}
        <Col xm={12} md={6} className="start-center">
          <h2 className="text-dark l-s-1 mb-3" style={{ fontWeight: "700" }}>
            {thisProduct?.title}
          </h2>
          <p className="text-secondary l-s-1" style={{ fontWeight: "400" }}>
            {thisProduct?.details}
          </p>
          {/* ------------- */}
          <div className="start-row-center">
            <span className="h3 mb-0 me-2 fw-bold">$ {thisProduct?.price}</span>
            <div className="btns">
              <button className="count-btn p-2 ps-3">
                <AiOutlineMinus />
              </button>
              <input type="number" className="p-2" defaultValue={1} min={1} />
              <button className="count-btn p-2 pe-3">
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          {/* ------------- */}
          <button className="b-o-none red text-white l-s-2 py-2 px-4 rounded-pill center mt-4">
            <BsCart2 className="me-2" /> Add
          </button>
          {/* ------------- */}
        </Col>
        <Col xm={12} md={6}>
          <img src={`/${thisProduct?.img}`} className="img-fluid" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsDetails;
