import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
    return <footer>
        <Container>
            <Row>
            <Col className='text-center py-3'></Col>
            <Col className='text-center py-3'>Copyright &copy; Get Your Gadget</Col>
             <Col className='py-3'><i className="fab fa-instagram"></i>          <i className="fab fa-twitter"></i>         <i className="fab fa-facebook"></i></Col>
            </Row>
        </Container>

    </footer>
}

export default Footer
