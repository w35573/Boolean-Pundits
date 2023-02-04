import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/about.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Yasham Foundation</h2>
              <p className="section__description">
                As per the Multidimensional Poverty Index compiled by the United
                Nations Development Program, over 370 million people live in
                multidimensional poverty in India.* Aside from lack of money,
                multidimensional poverty encompasses other factors such as
                limited education and poor healthcare and nutrition. Yasham
                employs a multi-faceted approach to alleviate the
                multidimensional poverty in India. Yasham provides and supports
                education, healthcare, women empowerment, youth mobilisation and
                community enrichment programs for communities.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Flexible Pricing
                  Plans
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Home Delivery &
                  Return
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Well Maintained
                  Cars
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Contact-less
                  Doorstep Delivery
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100 rounded-3" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
