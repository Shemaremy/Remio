import React, { useEffect } from "react";
import $ from "jquery";
import "./lib/js/owl-carousel.js";
import './vendor/bootstrap/css/bootstrap.min.css';
import './lib/css/fontawesome.css';
import './lib/css/templatemo-eduwell-style.css';
import './lib/css/owl.css';
import './lib/css/lightbox.css';

const Part1 = () => {
  useEffect(() => {
    // Menu Dropdown Toggle
    if ($('.menu-trigger').length) {
      $(".menu-trigger").on('click', function () {
        $(this).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
      });
    }

    // Menu elevator animation
    $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function (e) {
      e.preventDefault();
      const target = $(this.hash);
      if (target.length) {
        const width = $(window).width();
        if (width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);
        }
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 700);
      }
    });

    // Smooth Scroll & Active Menu Highlight
    const onScroll = () => {
      const scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
        const currLink = $(this);
        const refElement = $(currLink.attr("href"));
        if (refElement.length) {
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav ul li a').removeClass("active");
            currLink.addClass("active");
          } else {
            currLink.removeClass("active");
          }
        }
      });
    };

    $(document).on("scroll", onScroll);

    return () => {
      // Cleanup event listeners when component unmounts
      $(document).off("scroll", onScroll);
      $(".menu-trigger").off("click");
      $('.scroll-to-section a[href*=\\#]:not([href=\\#])').off("click");
    };
  }, []);

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <a href="index.html" className="logo">
                <li>Remio.</li>
              </a>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#top" className="active">Home</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#services">Services</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#courses">Courses</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#contact-section">Contact Us</a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Part1;
