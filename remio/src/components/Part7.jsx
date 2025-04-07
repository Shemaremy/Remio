import React from "react";

const Part7 = () => {
  const date = new Date();

  const handleSubmit = () => {
    window.reload();
  };
 
  return (
    <section className="contact-us" id="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.8736565897683!2d30.10309159755706!3d-1.955562124361725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6f907feabf7%3A0x207b54b64c8ffb34!2sAdventist%20University%20of%20Central%20Africa%2C%20Science%20and%20Technology%20Centre!5e0!3m2!1sen!2srw!4v1744040066081!5m2!1sen!2srw"
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
                    Do not hesitate to contact us if you have any questions, ideas, or just want to chat — we’re here to help
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
                      onSubmit={handleSubmit}
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
                <a href="https://www.instagram.com/shema.remy">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com/Shemaremi/">
                  <i className="fab fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/shema-remy-ba3229288">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Shemaremy">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-12">
            <p className="copyright">
              Copyright © {date.getFullYear()} Remio. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part7;
