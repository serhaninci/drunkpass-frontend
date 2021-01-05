import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./BlockTitle";

const Pricing = (props) => {
  const [plan, setPlan] = useState(false);
  return (
    <section className="pricing-one" id="pricing">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Pricing Tables"
          titleText={`Choose Pricing Plans Which \n Suits Your Needs`}
        />
        <ul
          className="list-inline text-center switch-toggler-list"
          role="tablist"
          id="switch-toggle-tab"
        >
          <li className={`month ${plan === false ? "active" : ""}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPlan(false);
              }}
            >
              Monthly
            </a>
          </li>
          <li>
            <label
              onClick={(e) => {
                e.preventDefault();
                setPlan(!plan);
              }}
              className={`switch ${plan === true ? "off" : "on"}`}
            >
              <span className="slider round"></span>
            </label>
          </li>
          <li className={`year ${plan === true ? "active" : ""}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPlan(true);
              }}
            >
              Annualy
            </a>
          </li>
        </ul>
        {plan === true ? (
          <div id="yearly">
            <Row>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Basic Membership</p>
                    <h3>£50.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>%5 Discount on Each  Visit*</li>
                      <li>Free support</li>
                      <li>Congierge Service</li>
                      <li>Free Access to DrunkPass Events</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                    <span>*Up to £25 Monthly</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Premium Membership</p>
                    <h3>£100.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>%10 Discount on Each Visit*</li>
                      <li>Free support</li>
                      <li>Congierge Service</li>
                      <li>%25 Discount on Venue Entries</li>
                      <li>Free Access to DrunkPass Events</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                    <span>*Up to £50 Monthly</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>VIP Membership</p>
                    <h3>£150.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>%15 Discount on Each Visit*</li>
                      <li>Free support</li>
                      <li>Congierge Service</li>
                      <li>%50 Discount on Venue Entries</li>
                      <li>Free Access to DrunkPass Events</li>
                      <li>Complimentary Drinks</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                    <span>*Up to £75 Monthly</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div id="month">
            <Row>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Basic Membership</p>
                    <h3>£5.99</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>%5 Discount on Each  Visit*</li>
                      <li>Free support</li>
                      <li>Congierge Service</li>
                      <li>Free Access to DrunkPass Events</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                    <span>*Up to £25 Monthly</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Premium Membership</p>
                    <h3>£9.99</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>%10 Discount on Each Visit*</li>
                      <li>Free support</li>
                      <li>Congierge Service</li>
                      <li>%25 Discount on Venue Entries</li>
                      <li>Free Access to DrunkPass Events</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                    <span>*Up to £50 Monthly</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>VIP Membership</p>
                    <h3>£14.99</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>%15 Discount on Each Visit*</li>
                      <li>Free support</li>
                      <li>Congierge Service</li>
                      <li>%50 Discount on Venue Entries</li>
                      <li>Free Access to DrunkPass Events</li>
                      <li>Complimentary Drinks</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                    <span>*Up to £75 Monthly</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Pricing;
