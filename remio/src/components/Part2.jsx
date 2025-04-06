import React from "react";

const Part2 = () => {
  return (
    <section className="main-banner" id="top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="header-text">
              <h6>Welcome to our school</h6>
              <h2>
                Best Place To Learn Graphic <em>Design!</em>
              </h2>
              <div className="main-button-gradient">
                <div className="scroll-to-section">
                  <a href="#contact-section">Join Us Now!</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-image">
              <img src="/images/banner-right-image.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part2;
