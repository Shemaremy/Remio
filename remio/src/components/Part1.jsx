import React from "react";

const Part1 = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <a href="index.html" className="logo">
                <img src="/images/templatemo-eduwell.png" alt="EduWell Template" />
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
