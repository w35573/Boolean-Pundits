import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About Us",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/sponsor",
    display: "Sponsor",
  },

  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                    Vroom <br /> Car Rental
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Car subscription from Vroom provides the flexibility of having a
              car anytime you want, as well as the assurance of a sanitized and
              virus free vehicle for your own self drive. The car sanitization
              process encompasses all the preventive hygiene best practices
              directed by the World Health Organization.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">
                Bhavan's Campus, Old D N Nagar,
                <br />
                Munshi Nagar, Andheri West, Mumbai
                <br />
                Maharashtra 400058
              </p>
              <p className="office__info">Phone: +91 9145374641</p>

              <p className="office__info">Email: vroom@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Newsletter</h5>
              <p className="section__description">
                Subscribe to our Newsletter
              </p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed
                by w35573. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
