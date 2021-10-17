import React from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const Banner = () => {
  return (
    <div className="center banner">
      <Container>
        <InputGroup
          className="mx-auto rounded-pill p-1 bg-light"
          style={{ maxWidth: "400px" }}
        >
          <FormControl
            placeholder="Username"
            name="search"
            className="border-0 rounded-pill me-1 focus-red p-1"
          />
          <InputGroup.Text className="rounded-pill red l-s-1 p-2 px-3 border-0">
            <span className="d-none d-md-inline-block">Search</span>
            <Search className="ms-0 ms-md-2" />
          </InputGroup.Text>
        </InputGroup>
      </Container>
    </div>
  );
};

export default Banner;
