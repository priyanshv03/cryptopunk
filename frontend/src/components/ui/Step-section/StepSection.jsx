import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import './step-section.css'

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>
          <Col lg="3">
            <div className="single__step__item">
              <span>
                <i class="ri-wallet-line"></i>
              </span>
              <div className="step__item__content">
                <h5>
                  <Link to="/wallet">Setup your wallet</Link>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur sed perferendis quidem totam, ducimus veritatis.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
