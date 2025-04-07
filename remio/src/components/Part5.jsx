import React from "react";

const Part5 = () => {
  return (
    <section className="simple-cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-1">
            <div className="left-image">
              <img src="/images/cta-left-image.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 align-self-center">
            <h6>Get the sale right now!</h6>
            <h4>Up to 50% OFF For 2+ courses</h4>
            <p>
              Don’t miss out on this limited-time offer! Enroll in two or more courses today and 
              enjoy up to 50% off. It’s the perfect chance to level up your skills at a fraction of the price!
            </p>
            <div className="white-button">
              <a href="#courses">View Courses</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part5;
