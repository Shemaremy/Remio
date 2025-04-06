import React, { useEffect } from "react";

import $ from "../owlSetup"; 
import "bootstrap/dist/js/bootstrap.bundle.min";




const Part3 = () => {

  useEffect(() => {
    if ($ && $.fn && typeof $.fn.owlCarousel === "function") {
      $(".owl-service-item").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 700,
        margin: 30,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
          1200: { items: 4 },
        },
      });
    } else {
      console.error("Owl Carousel did not initialize correctly.");
      console.log("$.fn.owlCarousel is", $.fn.owlCarousel);
    }
  }, []);
  



  return (
    <section className="services" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6>Our Services</h6>
              <h4>
                Provided <em>Services</em>
              </h4>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="owl-service-item owl-carousel">
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="/images/service-icon-01.png" alt="" />
                  </div>
                  <h4>Useful Tricks</h4>
                  <p>EduWell is the professional HTML5 template for your school or university websites.</p>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="/images/service-icon-02.png" alt="" />
                  </div>
                  <h4>Creative Ideas</h4>
                  <p>You can download and use this EduWell Template for your teaching and learning stuffs.</p>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="/images/service-icon-03.png" alt="" />
                  </div>
                  <h4>Ready Target</h4>
                  <p>Please tell your friends about the best CSS template website that is TemplateMo.</p>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="/images/service-icon-04.png" alt="" />
                  </div>
                  <h4>Technology</h4>
                  <p>Aenean bibendum consectetur ex eu porttitor. Pellentesque id ultrices metus.</p>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="/images/service-icon-01.png" alt="" />
                  </div>
                  <h4>Useful Tricks</h4>
                  <p>In non nisi eget magna efficitur ultricies non quis sapien. Pellentesque tellus.</p>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="/images/service-icon-02.png" alt="" />
                  </div>
                  <h4>Creative Ideas</h4>
                  <p>Aenean bibendum consectetur ex eu porttitor. Pellentesque id ultrices metus.</p>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="/images/service-icon-03.png" alt="" />
                  </div>
                  <h4>Ready Target</h4>
                  <p>In non nisi eget magna efficitur ultricies non quis sapien. Pellentesque tellus.</p>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="/images/service-icon-04.png" alt="" />
                  </div>
                  <h4>Technology</h4>
                  <p>Aenean bibendum consectetur ex eu porttitor. Pellentesque id ultrices metus.</p>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="/images/service-icon-01.png" alt="" />
                  </div>
                  <h4>Useful Tricks</h4>
                  <p>In non nisi eget magna efficitur ultricies non quis sapien. Pellentesque tellus.</p>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="/images/service-icon-02.png" alt="" />
                  </div>
                  <h4>Creative Ideas</h4>
                  <p>Aenean bibendum consectetur ex eu porttitor. Pellentesque id ultrices metus.</p>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="/images/service-icon-03.png" alt="" />
                  </div>
                  <h4>Ready Target</h4>
                  <p>In non nisi eget magna efficitur ultricies non quis sapien. Pellentesque tellus.</p>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="/images/service-icon-04.png" alt="" />
                  </div>
                  <h4>Technology</h4>
                  <p>Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part3;
