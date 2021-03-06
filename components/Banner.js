import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/banner-image-1-1.jpg";
import BannerMoc from "../assets/images/resources/banner-moc-1-1.png";

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  });
  const openModal = () => {
    setOpen({
      isOpen: true,
    });
  };

  return (
    <section className="banner-one" id="home">
      <img src={BannerShape} className="banner-one__bg-shape-1" alt="" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}
      ></div>
      <div className="container">
        <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="lx1eUsB1-IY"
          onClose={() => setOpen({ isOpen: false })}
        />
        <div onClick={openModal} className="banner-one__video video-popup">
          <i className="fa fa-play"></i>
        </div>
        <div className="banner-one__moc">
          <img
            src={BannerMoc}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt=""
          />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              {/* <form
                className="banner-one__mc-form mc-form"
                data-url="MAILCHIMP__POPUP__FORM__URL"
              >
                <input type="text" name="email" placeholder="Email address" />
                <button type="submit" className="thm-btn banner-one__mc-btn">
                  <span>Free Trial</span>
                </button>
              </form>
              <div className="mc-form__response"></div> */}
              <h3>
                Manage Your <br /> Night Out with <br /> DrunkPass
              </h3>
              <p>
              DrunkPass is an easy way to access the best value {" "}
                <br /> nightlife activities in a single platform that consumers and
                <br />businesses engage in. And also offers enormous benefits.
                <br /> You can plan your night out with the help of an AI-based 
                <br />digital assistant by talking or texting.
                <br />Eg. "Show me the nearest best restaurant on the map".
              </p>
              <a href="#features" className="thm-btn banner-one__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
