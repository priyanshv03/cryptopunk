import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import "./step-section.css";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, animi? Deserunt provident neque aliquam deleniti.",
    icon: "ri-wallet-line",
  },
  {
    title: "Create your collecion",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, animi? Deserunt provident neque aliquam deleniti.",
    icon: "ri-layout-masonry-line",
  },
  {
    title: "Add your NFTs",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, animi? Deserunt provident neque aliquam deleniti.",
    icon: "ri-image-line",
  },
  {
    title: "List them for sale",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, animi? Deserunt provident neque aliquam deleniti.",
    icon: "ri-list-check",
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index}>
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <br />
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
