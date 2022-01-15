import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ShoppingCart } from './ShoppingCart/ShoppingCart';
import logo from "../assets/img/artifex.svg";

const style = {
  marginBottom: "30px",
};

export const HeaderApp = () => (
  <Navbar variant="dark" bg="dark" style={style}>
    <Container fluid>
      <Link to={"/"}>
        <Navbar.Brand>
          <img alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top" />{" "}
          E-commerce-POLO
          </Navbar.Brand>
      </Link>
      <ShoppingCart />
    </Container>
  </Navbar>
);

