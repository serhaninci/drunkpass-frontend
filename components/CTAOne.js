import React from "react";
import BlockTitle from "./BlockTitle";

import CtaShape1 from "../assets/images/shapes/cta-1-shape-1.png";
import CtaShape2 from "../assets/images/shapes/cta-1-shape-2.png";
import CtaMoc1 from "../assets/images/resources/cta-1-moc-1.png";

const CTAOne = () => {
  return (
    <section className="cta-one">
      <img src={CtaShape1} className="cta-one__bg-shape-1" alt="" />
      <img src={CtaShape2} className="cta-one__bg-shape-2" alt="" />
      <div className="container">
        <div className="cta-one__moc wow fadeInLeft" data-wow-duration="1500ms">
          <img src={CtaMoc1} className="cta-one__moc-img" alt="" />
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="left"
                paraText="Best Nightlife Platform"
                titleText={`Enjoy More for \n Less`}
              />
              <div className="cta-one__text">
                <p>
                 DrunkPass enables you to save money up to £75 monthly.
                </p>
              </div>
              <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle"></i>
                 Get your mobile VIP concierge in your pocket.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Get your premium discounts for each visit.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Create a public or private pub crawl.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Set budget for night out.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Easy access to best value options anytime.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                 No surprises, no hidden charges , see what you spend instantly.
                </li>
              </ul>
              <a href="#" className="thm-btn cta-one__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
