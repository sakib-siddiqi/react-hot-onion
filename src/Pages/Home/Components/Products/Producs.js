import React from "react";
import FilterProducts from "./FilterProducts";
import { Tab, Tabs, Button } from "react-bootstrap";
import useProducts from "../../../../Hooks/useProducts";
import { Link } from "react-router-dom";
const Producs = () => {
  const { products } = useProducts();
  // filter function
  const filterFor = (category) =>
    products.filter((product) => product.category === category);
  // --------------
  // --------------
  // --------------
  return (
    <div className="my-5">
      <Tabs
        defaultActiveKey="breakfast"
        id="controlled-tab-example"
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="breakfast" title="Breakfast">
          <FilterProducts products={filterFor("breakfast")} />
        </Tab>
        <Tab eventKey="lunch" title="Lunch">
          <FilterProducts products={filterFor("lunch")} />
        </Tab>
        <Tab eventKey="dinner" title="Dinner">
          <FilterProducts products={filterFor("dinner")} />
        </Tab>
      </Tabs>
      <div className="text-center">
        <Link to="/products">
          <Button className="mt-4 mb-2 px-3 py-2 my-btn">
            Checkout Our Foods
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Producs;
