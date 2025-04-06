import React, { useEffect } from "react";
import "./lib/js/owl-carousel.js";
import './vendor/bootstrap/css/bootstrap.min.css';
import './lib/css/fontawesome.css';
import './lib/css/templatemo-eduwell-style.css';
import './lib/css/owl.css';
import './lib/css/lightbox.css';

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


  const testimonials = [
    { text: "just think about TemplateMo if you need free CSS templates for your website", name: "Catherine Walk", role: "CEO & Founder" },
    { text: "think about our website first when you need free HTML templates for your website", name: "David Martin", role: "CTO of Tech Company" },
    { text: "just think about our website wherever you need free templates for your website", name: "Sophia Whity", role: "CEO and Co-Founder" },
    { text: "Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.", name: "Helen Shiny", role: "Tech Officer" },
    { text: "Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.", name: "George Soft", role: "Gadget Reviewer" },
    { text: "Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.", name: "Andrew Hall", role: "Marketing Manager" },
    { text: "Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.", name: "Maxi Power", role: "Fashion Designer" },
    { text: "Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.", name: "Olivia Too", role: "Creative Designer" },
  ];

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
          <div className="owl-testimonials owl-carousel" style={{ position: "relative", zIndex: 5 }}>
            {testimonials.map((testimonial, index) => (
              <div className="item" key={index}>
                <p><i className="fa-classic fa-solid fa-quote-left fa-fw"></i> {`"${testimonial.text}"`}</p>
                
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part6;
