import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light text-center py-2">
        <div className="container w-100 pt-3 pb-2">
          <Row>
            <Col className="d-flex ">
              <p>
                TPI LabIII - Alvaro Johansen, Matias Herrero, Felipe De Gasperi
              </p>
            </Col>
            <Col className="d-flex justify-content-end  ">
              <p>Matuco©</p>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
