import React from "react";

import "./seller.css";
import { Container, Row, Col } from "reactstrap";
import ava01 from "../../../assets/images/ava-01.png";

import { SELLER__DATA } from "../../../assets/data/data";

const SellerSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="seller__section-title">
              <h3>Top Seller</h3>
            </div>
          </Col>

        {
            SELLER__DATA.map(item=> (
                  <Col lg="2">
            <div className="single__seller-card d-flex align-items-center">
              <div className="seller__img">
                <img src={ava01} alt="" className="w-100" />
              </div>
              <div className="seller__content">
                <h6>Priyansh Verma</h6>
                <h6>4.89 ETH</h6>
              </div>
            </div>
          </Col>
         ) )}

       
        </Row>
      </Container>
    </section>
  );
};

export default SellerSection;
