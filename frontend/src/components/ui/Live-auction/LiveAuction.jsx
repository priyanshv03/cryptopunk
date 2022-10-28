import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import img01 from "../../../assets/images/img-01.jpg";

import ava01 from "../../../assets/images/ava-01.png";

import './live-auction.css'

const LiveAuction = () => {
  return (
    <Container>
      <Row>
        <Col lg="12" className="mb-4">
          <div className="live__auction__top d-flex align-items-center justify-content-between">
            <h3>Live Auction</h3>
            <span>
              <Link to="market">Explore more</Link>
            </span>
          </div>
        </Col>
        <Col lg="3">
          <div className="single__nft__card">
            <div className="nft__img">
              <img src={img01} alt="" className="w-100" />
            </div>
            <div className="nft__content">
              <h5 className="nft__title">Cryptopunk Club</h5>
              <div className="creater__info-wrapper d-flex gap-3">
                <div className="creator__img">
                  <img src={ava01} alt="" className="w-100" />
                </div>
                <div className="creator__info d-flex align-items-center justify-content-between w-100">
                  <div>
                    <h6>Created by</h6>
                    <p>Priyansh Verma</p>
                  </div>
                  <div >
                    <h6>Current bid</h6>
                    <p>9.78 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LiveAuction;
