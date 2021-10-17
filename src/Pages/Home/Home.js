import React from "react";
import { Container } from "react-bootstrap";

import Banner from "./Components/Banner";
import Producs from "./Components/Products/Producs";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <Producs />
      </Container>
    </>
  );
};

export default Home;
