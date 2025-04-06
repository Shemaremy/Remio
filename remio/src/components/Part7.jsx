import React from "react";

const Part7 = () => {
  return (
    <section className="contact-us" id="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7151.84524236698!2d-122.19494600413192!3d47.56605883252286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490695e625f8965%3A0xf99b055e76477def!2sNewcastle%20Beach%20Park%20Playground%2C%20Bellevue%2C%20WA%2098006%2C%20USA!5e0!3m2!1sen!2sth!4v1644335269264!5m2!1sen!2sth"
                width="100%"
                height="420px"
                frameBorder="0"
                style={{
                  border: 0,
                  borderRadius: "15px",
                  position: "relative",
                  zIndex: 2,
                }}
                allowFullScreen=""
                title="Google Map"
              ></iframe>
              <div className="row">
                <div className="col-lg-4 offset-lg-1">
                  <div className="contact-info">
                    <div className="icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <h4>Phone</h4>
                    <span>+250 783 674 289</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-info">
                    <div className="icon">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <h4>Email</h4>
                    <span>remyshema20@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <form id="contact" action="" method="post">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <h6>Contact us</h6>
                    <h4>
                      Say <em>Hello</em>
                    </h4>
                    <p>
                      IF you need a working contact form by PHP script, please
                      visit TemplateMo's contact page for more info.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      autoComplete="on"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      placeholder="Your Email"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your Message"
                    ></textarea>
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button
                      type="submit"
                      id="form-submit"
                      className="main-gradient-button"
                    >
                      Send Message
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-12">
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-rss"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-12">
            <p className="copyright">
              Copyright © 2022 EduWell Co., Ltd. All Rights Reserved.
              <br />
              Design:{" "}
              <a
                rel="sponsored"
                href="https://templatemo.com"
                target="_blank"
              >
                TemplateMo
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part7;
