import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg1 from "../../assets/all-images/sponsor-1.jpeg";
import aboutImg2 from "../../assets/all-images/sponsor-2.jpg";
import aboutImg3 from "../../assets/all-images/sponsor-3.jpg";
import aboutImg4 from "../../assets/all-images/sponsor-4.jpg";
import aboutImg5 from "../../assets/all-images/sponsor-5.jpg";

const SponsorSection = ({ aboutClass }) => {
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
              <h4 className="section__subtitle">Our 5 Point Programs</h4>
              <h2 className="section__title">Education</h2>
              <p className="section__description">
              Education is the first priority for even the poorest echelons of the impoverished population. They have one dream and that is to "Educate my child" The learning gaps for the first generation of school goers in the formal education system are significant.
Yasham provides quality education to underprivileged children to bridge this learning gap. We use latest tools and technology, to supplement the formal school education. We focus on proficiency in English, basic Mathematical skills and Value Systems. Art, Culture, Sports and Field trips are part of the curriculum, to promote experiential learning.
              </p>

              
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg1} alt="" className="w-100 rounded-3" />
            </div>
          </Col>
        </Row>

        <br></br>
        <br></br>
      <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg2} alt="" className="w-100 rounded-3" />
            </div>
          </Col>
        <Col lg="6" md="6">
            <div className="about__section-content">
              <h2 className="section__title">HealthCare</h2>
              <p className="section__description">
              Studies have repeatedly shown that the holistic development of a child is hampered by poor health and nutrition. Malnutrition and simple unattended health complaints such as a toothache or an eye problem have the potential to have material impact on academic outcomes. Chronic health problems in the family also act as an impediment.
Yasham provides healthcare facilities to children and their families to enable the families to better focus on the development of the child. We improve the nutrition of the children by providing healthy snacks to them at our centres.</p>

              
            </div>
          </Col>

        </Row>

        <br></br>
        <br></br>
      <Row>
        <Col lg="6" md="6">
            <div className="about__section-content">
              <h2 className="section__title">Women Empowerment</h2>
              <p className="section__description">
              Women are the critical pillars in any family. An empowered mother is a role model for the child. She can instil a sense of self-confidence and inculcate grand aspirations in her child.
Yasham empowers women primarily through livelihood programs and provides them with supplemental English speaking classes. </p>

              
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg3} alt="" className="w-100 rounded-3" />
            </div>
          </Col>

        </Row>

        <br></br>
        <br></br>
      <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg4} alt="" className="w-100 rounded-3" />
            </div>
          </Col>
        <Col lg="6" md="6">
            <div className="about__section-content">
              <h2 className="section__title">Youth Mobilisation</h2>
              <p className="section__description">
              Today's Youth will be the future of tomorrow in our country. It is critical that we equip them with the necessary skills to enable them to be gainfully employed in the future and achieve their ambitions.
Yasham runs "Hum Honge Kamyab" program for skill development, career placement, mentoring and counselling programs for the youth in the community. We also take an active interest in developing future artists by running talent contests.</p>

              
            </div>
          </Col>

        </Row>
        <br></br>
        <br></br>
      <Row>
        <Col lg="6" md="6">
            <div className="about__section-content">
              <h2 className="section__title">Community Enrichment</h2>
              <p className="section__description">
              Good values and practices uplift a community.
Yasham offers counselling, anti-alcoholism programs, cleanliness drives and elderly care to the families. We work at the grass root level, interacting constantly with the community members to transform them in to self sufficient and learning communities.</p>

              
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg5} alt="" className="w-100 rounded-3" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SponsorSection;
