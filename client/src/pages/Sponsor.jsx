import React from 'react'
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import SponsorSection from "../components/UI/SponsorSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

import PayButton from "../components/UI/PayButton";


const Sponsor = () => {
   return (
      <Helmet title="About">
        <CommonSection title="Partners" />
        <SponsorSection aboutClass="aboutPage" />
  
        
  
  
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5 text-center">
                <h2 className="section__title">Our Founders</h2>
              </Col>
              <OurMembers />
            </Row>
          </Container>
        </section>

        {/* <section>
          <PayButton />
        </section> */}
      </Helmet>
  )
}

export default Sponsor