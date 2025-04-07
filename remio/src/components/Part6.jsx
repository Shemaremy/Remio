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
      { 
        text: "The Front-end Development course helped me master React and build my first mobile app. Highly recommended for aspiring developers!", 
        name: "Catherine Walk", 
        role: "Front-end Developer" 
      },
      { 
        text: "After completing the Backend Development course, I landed a job as a Node.js developer. The practical skills taught here are unmatched!", 
        name: "David Martin", 
        role: "Backend Engineer" 
      },
      { 
        text: "Learning cloud technologies like AWS and .NET Core opened new doors for my career. The Cloud Computing course is a must!", 
        name: "Sophia Whity", 
        role: "Cloud Solutions Architect" 
      },
      { 
        text: "I never thought graphic design could be this fun and impactful. Thanks to this course, I now freelance with confidence.", 
        name: "Helen Shiny", 
        role: "Graphic Designer" 
      },
      { 
        text: "Front-end development used to scare me, but this course made it super approachable and exciting. Tailwind and React are game-changers!", 
        name: "George Soft", 
        role: "UI Developer" 
      },
      { 
        text: "I joined the backend course to upskill—and I ended up building my own API from scratch. Totally worth it!", 
        name: "Andrew Hall", 
        role: "Software Developer" 
      },
      { 
        text: "Cloud computing felt overwhelming before, but this course made it clear and hands-on. I’m now managing deployments confidently.", 
        name: "Maxi Power", 
        role: "DevOps Engineer" 
      },
      { 
        text: "From photo editing to animation, the Graphic Design course boosted both my creativity and portfolio. I loved every session.", 
        name: "Olivia Too", 
        role: "Creative Designer" 
      },
    ];
    

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6>Testimonials</h6>
              <h4>
                What People <em>Say</em>
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
