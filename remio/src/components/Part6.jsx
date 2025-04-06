import React, { useEffect } from "react";
import "../assets/js/owl-carousel.js"
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../assets/css/fontawesome.css';
import '../assets/css/templatemo-eduwell-style.css';
import '../assets/css/owl.css';
import '../assets/css/lightbox.css';

const Part6 = () => {

  useEffect(() => {
      if ($ && $.fn && typeof $.fn.owlCarousel === "function") {
        $(".owl-testimonials").owlCarousel({
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
            1200: { items: 3 },
          },
        });
      } else {
        console.error("Owl Carousel did not initialize correctly.");
        console.log("$.fn.owlCarousel is", $.fn.owlCarousel);
      }
    }, []);


  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6>Testimonials</h6>
              <h4>
                What They <em>Think</em>
              </h4>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              className="owl-testimonials owl-carousel"
              style={{ position: "relative", zIndex: 5 }}
            >
              <div className="item">
                <p>
                  “just think about TemplateMo if you need free CSS templates
                  for your website”
                </p>
                <h4>Catherine Walk</h4>
                <span>CEO &amp; Founder</span>
                <img src="/images/quote.png" alt="" />
              </div>
              <div className="item">
                <p>
                  “think about our website first when you need free HTML
                  templates for your website”
                </p>
                <h4>David Martin</h4>
                <span>CTO of Tech Company</span>
                <img src="/images/quote.png" alt="" />
              </div>
              <div className="item">
                <p>
                  “just think about our website wherever you need free
                  templates for your website”
                </p>
                <h4>Sophia Whity</h4>
                <span>CEO and Co-Founder</span>
                <img src="/images/quote.png" alt="" />
              </div>
              <div className="item">
                <p>
                  “Praesent accumsan condimentum arcu, id porttitor est semper
                  nec. Nunc diam lorem.”
                </p>
                <h4>Helen Shiny</h4>
                <span>Tech Officer</span>
                <img src="/images/quote.png" alt="" />
              </div>
              <div className="item">
                <p>
                  “Praesent accumsan condimentum arcu, id porttitor est semper
                  nec. Nunc diam lorem.”
                </p>
                <h4>George Soft</h4>
                <span>Gadget Reviewer</span>
                <img src="/images/quote.png" alt="" />
              </div>
              <div className="item">
                <p>
                  “Praesent accumsan condimentum arcu, id porttitor est semper
                  nec. Nunc diam lorem.”
                </p>
                <h4>Andrew Hall</h4>
                <span>Marketing Manager</span>
                <img src="/images/quote.png" alt="" />
              </div>
              <div className="item">
                <p>
                  “Praesent accumsan condimentum arcu, id porttitor est semper
                  nec. Nunc diam lorem.”
                </p>
                <h4>Maxi Power</h4>
                <span>Fashion Designer</span>
                <img src="/images/quote.png" alt="" />
              </div>
              <div className="item">
                <p>
                  “Praesent accumsan condimentum arcu, id porttitor est semper
                  nec. Nunc diam lorem.”
                </p>
                <h4>Olivia Too</h4>
                <span>Creative Designer</span>
                <img src="/images/quote.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part6;
