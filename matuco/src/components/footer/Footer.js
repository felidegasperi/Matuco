import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light text-center py-3">
        <div className="container w-100 pt-3 pb-3">
          <Row>
            <Col className="">
              <p>Matuco@gmail.com</p>
            </Col>
            <Col className="d-flex justify-content-end mx-8 ">
              <p>Todos los derechos reservados.</p>
            </Col>
            <Col className="d-flex justify-content-end mx-8 ">
              <p>Todos los derechos reservados.</p>
            </Col>
            
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
