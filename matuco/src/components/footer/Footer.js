import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { ThemeContext } from "../../services/themeContext/Theme.context";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <footer
        className={`${
          theme === "DARK"
            ? "bg-dark text-light text-center py-2"
            : "bg-light text-dark text-center py-2 border-top"
        }`}
      >
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
