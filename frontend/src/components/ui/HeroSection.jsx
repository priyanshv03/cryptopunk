import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import './hero-section.css'
const HeroSection = () => {
  return (
    <>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h2>
                  Discover rare digital art and collect
                  <span>sell extraordinary</span>
                  {" "}NFTs
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  dicta itaque labore id maiores ab dolor magnam aut odit
                  ratione, reprehenderit, consequatur asperiores culpa quasi
                  eligendi.
                </p>
                <div className="hero__btns d-flex align-items-center gap-4">
                  <button className="explore__btn d-flex align-items-center gap-2">
                    <i className="ri-rocket-line"></i>
                    <Link to="/market">Explore</Link>
                  </button>
                  <button className="create__btn d-flex align-items-center gap-2">
                    <i className="ri-ball-pen-line"></i>
                    <Link to="/create">Create</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
