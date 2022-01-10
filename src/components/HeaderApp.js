import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { ShoppingCart } from './ShoppingCart/ShoppingCart';

export const HeaderApp = () => (
  <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home">E-commerce-POLO</Navbar.Brand>
    <ShoppingCart />
  </Container>
</Navbar>
);

