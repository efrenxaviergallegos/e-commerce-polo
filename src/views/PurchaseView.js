import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { DetailCart } from '../components/ShoppingCart/DetailCart'

export const PurchaseView = ({ history }) => {


    const handleCancelButtom = () => {
        history.push('/');
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1> Finalizar Compra </h1>
                    <DetailCart />
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col xs={6}>
                        <Button onClick={handleCancelButtom} variant='danger'>Cancelar</Button>
                    </Col>
                    <Col xs={6}>
                        <Button variant='success'>Comprar</Button>
                    </Col>
                </Row>
            </Container>
        </Container >
    );
};