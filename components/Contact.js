import React, { useState } from 'react';
import BlockTitle from "./BlockTitle";
import ContactBgShape from "../assets/images/shapes/contact-bg-shape-1-1.png";
import ContactImage from "../assets/images/resources/contact-1-1.jpg";


const Contact = () => {

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    subject: '',
    phone: '',
    message: '',
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        name: '',
        subject: '',
        phone: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('https://0s0dapbr54.execute-api.eu-west-2.amazonaws.com/dev/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <section className="contact-one">
      <img src={ContactBgShape} className="contact-one__bg-shape-1" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <form className="contact-form-validated contact-one__form" onSubmit={handleOnSubmit} >
              <BlockTitle
                textAlign="left"
                paraText="Contact Now"
                titleText={`Have Question? Write \n a Message`}
              />
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Name" name="name" id="name" value={inputs.name} required onChange={handleOnChange} />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Email Address"
                    name="email"
                    id="email"
                    type="email"
                    value={inputs.email}
                    required
                    onChange={handleOnChange}
                  />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Subject" name="subject" id="subject" required value={inputs.subject} onChange={handleOnChange} />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Phone Number" name="phone" id="phone" value={inputs.phone} onChange={handleOnChange} />
                </div>
                <div className="col-lg-12">
                  <textarea
                    placeholder="Write Message"
                    name="message"
                    id="message"
                    onChange={handleOnChange}
                    value={inputs.message}
                  ></textarea>
                </div>
                <div className="col-lg-12 text-left">
                  <button type="submit" className="thm-btn contact-one__btn" disabled={status.submitting}>
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="result">
              {status.info.error && (
                <div className="error">
                  Something went wrong !
                </div>
              )}
              {!status.info.error && status.info.msg && (
                <div className="result">Message has been sent !</div>
              )}

            </div>
          </div>
          <div
            className="col-lg-5 d-flex wow fadeInRight"
            data-wow-duration="1500ms"
          >
            <div className="my-auto">
              <div className="contact-one__image">
                <img src={ContactImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
