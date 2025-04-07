import React, { useEffect } from "react";
import "./lib/js/owl-carousel.js";

const services = [
  {
    icon: "/images/service-icon-01.png",
    title: "Useful Tricks",
    description: "Discover tips and shortcuts designed to improve productivity and simplify daily tasks.",
  },
  {
    icon: "/images/service-icon-02.png",
    title: "Creative Ideas",
    description: "Unlock fresh perspectives and innovative solutions for all your learning needs.",
  },
  {
    icon: "/images/service-icon-03.png",
    title: "Ready Target",
    description: "Achieve your goals efficiently with our pre-defined learning objectives and paths.",
  },
  {
    icon: "/images/service-icon-04.png",
    title: "Technology",
    description: "Explore modern tech tools and platforms tailored for effective digital education.",
  },
  {
    icon: "/images/service-icon-01.png",
    title: "Useful Tricks",
    description: "Learn practical insights and time-saving techniques for smarter study routines.",
  },
  {
    icon: "/images/service-icon-02.png",
    title: "Creative Ideas",
    description: "Fuel your imagination with methods that encourage original thinking and creativity.",
  },
  {
    icon: "/images/service-icon-03.png",
    title: "Ready Target",
    description: "Stay focused with clear, measurable outcomes in every course and subject.",
  },
  {
    icon: "/images/service-icon-04.png",
    title: "Technology",
    description: "Utilize cutting-edge innovations that support virtual learning and engagement.",
  },
  {
    icon: "/images/service-icon-01.png",
    title: "Useful Tricks",
    description: "Empower your workflow with clever educational hacks and hidden features.",
  },
  {
    icon: "/images/service-icon-02.png",
    title: "Creative Ideas",
    description: "Enhance lesson plans or projects with vibrant and inspiring approaches.",
  },
  {
    icon: "/images/service-icon-03.png",
    title: "Ready Target",
    description: "Track progress confidently with our goal-oriented learning strategy.",
  },
  {
    icon: "/images/service-icon-04.png",
    title: "Technology",
    description: "Stay ahead with continuous updates on emerging educational technologies.",
  },
];

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
          0: { items: 1, dots: false },
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
              {services.map((service, index) => (
                <div className="item" key={index}>
                  <div className="service-item">
                    <div className="icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part3;
