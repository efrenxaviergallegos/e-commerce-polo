

import React from 'react';
import { Col, Row, Button, Badge } from 'react-bootstrap';
import "../../assets/css/styles.css";
import {saveLastInterestProduct} from "../../app/service/storageServices";
import db from "../../app/db/db";

const styles = {
  fontSize: "15px",
  color: "black",
};


export const Product = ({ item }) => {
  const { title, image, price } = item;

  const addProductToCart = ({title, price, category}) => {
    db.cart.add({
      title: title,
      price: price,
      category: category
    })
  }
  return (
    <Col xs={4}>
      <Row>
        <Col xs={8}>
          <div style={styles}>{title}</div>
        </Col>
        <Col xs={4}>
          <Button onClick= {() => saveLastInterestProduct(title)} variant="primary"> 
            Precio <Badge bg="secondary">{price}</Badge>
            <span className="visually-hidden">$</span>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <img className="img-product" alt="" src={image}></img>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => addProductToCart(item)} variant="warning">Agregar al carrito</Button>
        </Col>
      </Row>
    </Col>
  );
};