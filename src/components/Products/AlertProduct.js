import { Alert } from 'react-bootstrap';
import React, { useState, useEffect } from 'react'

export const AlertProduct = () => {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState("");

    useEffect(() => {
        const lastProduct = sessionStorage.getItem("lastProduct")
        if( lastProduct ){
            setProduct(lastProduct);
            setShow(true);
                    
        }
        return () => {
            sessionStorage.removeItem("lastProduct")

        }
    },[])

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Continua Comprando</Alert.Heading>
                <p>
                    Aprobecha para comprar el producto {product} antes que se agote!
                </p>
            </Alert>
        );
    } else {
        return <></>
    }
    
}