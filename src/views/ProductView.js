import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { getProductById } from '../app/service/productsServices'

export const ProductView = ({ match }) => {

    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        const { params } = match
        getProductById(params.id)
            .then((productFromDB) => setProductDetail(productFromDB))
            .catch((err) => console.log(err))

    }, [match])
    return (
        <Container>
            <Row>
                <Col>
                    
                        <h1>
                            {productDetail && JSON.stringify(productDetail)}
                        </h1>
                    
                </Col>
            </Row>
        </Container>
    )
}