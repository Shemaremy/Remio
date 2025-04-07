import React, { useEffect } from "react";



const Part4 = () => {


  // --------- Accordion togglig for courses -------------------
  useEffect(() => {
    const Accordion = {
      settings: {
        first_expanded: false,
        toggle: false,
      },

      openAccordion: function (toggle, content) {
        if (content.children.length) {
          toggle.classList.add("is-open");
          let final_height = Math.floor(content.children[0].offsetHeight);
          content.style.height = final_height + "px";
        }
      },

      closeAccordion: function (toggle, content) {
        toggle.classList.remove("is-open");
        content.style.height = 0;
      },

      init: function (el) {
        const _this = this;

        let is_first_expanded = _this.settings.first_expanded;
        if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
        let is_toggle = _this.settings.toggle;
        if (el.classList.contains("is-toggle")) is_toggle = true;

        const sections = el.getElementsByClassName("accordion");
        const all_toggles = el.getElementsByClassName("accordion-head");
        const all_contents = el.getElementsByClassName("accordion-body");
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const toggle = all_toggles[i];
          const content = all_contents[i];

          toggle.addEventListener("click", function () {
            if (!is_toggle) {
              for (let a = 0; a < all_contents.length; a++) {
                _this.closeAccordion(all_toggles[a], all_contents[a]);
              }

              _this.openAccordion(toggle, content);
            } else {
              if (toggle.classList.contains("is-open")) {
                _this.closeAccordion(toggle, content);
              } else {
                _this.openAccordion(toggle, content);
              }
            }
          });

          if (i === 0 && is_first_expanded) {
            _this.openAccordion(toggle, content);
          }
        }
      },
    };

    const accordions = document.getElementsByClassName("accordions");
    for (let i = 0; i < accordions.length; i++) {
      Accordion.init(accordions[i]);
    }

    const handleClick = (e) => {
      const target = e.target;
      if (target.matches(".naccs .menu div")) {
        const numberIndex = Array.from(target.parentNode.children).indexOf(target);

        if (!target.classList.contains("active")) {
          document.querySelectorAll(".naccs .menu div").forEach((el) => el.classList.remove("active"));
          document.querySelectorAll(".naccs ul li").forEach((el) => el.classList.remove("active"));

          target.classList.add("active");
          const targetLi = document.querySelectorAll(".naccs ul li")[numberIndex];
          targetLi.classList.add("active");

          const listItemHeight = targetLi.offsetHeight;
          document.querySelector(".naccs ul").style.height = listItemHeight + "px";
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);



  // --------- Courses container -------------------------------
  const courses = [
    {
      title: "Front-end Dvt",
      image: "/images/courses-01.jpg",
      price: "$128",
      description: (
        <>
          In this course, you'll learn core front-end development technologies including{" "}
          <strong>HTML, CSS, Tailwind, React.js, and React Native</strong>. 
          <br />
          <br />
          These tools will equip you to build responsive, interactive, and modern web and mobile interfaces.
        </>
      ),
      duration: "36 Hours",
      weeks: "4 Weeks",
      certificates: "3 Certificates"
    },
    {
      title: "Backend Dvt",
      image: "/images/courses-02.jpg",
      price: "$156",
      description: (
        <>
          Master powerful backend technologies such as{" "}
          <strong>Node.js, Express.js, MongoDB, SQL, Java, C#, and C++</strong>. 
          <br />
          <br />
          This course will prepare you to build robust APIs and server-side logic for scalable applications.
        </>
      ),
      duration: "48 Hours",
      weeks: "6 Weeks",
      certificates: "1 Certificate"
    },
    {
      title: "Cloud Computing",
      image: "/images/courses-03.jpg",
      price: "$184",
      description: (
        <>
          Dive into the world of cloud with technologies like{" "}
          <strong>AWS and .NET Core</strong>. 
          <br />
          <br />
          You'll gain practical skills in deploying and managing scalable applications in cloud environments.
        </>
      ),
      duration: "28 Hours",
      weeks: "4 Weeks",
      certificates: "1 Certificate"
    },
    {
      title: "Graphic Design",
      image: "/images/courses-04.jpg",
      price: "$76",
      description: (
        <>
          This course focuses on creative tools including{" "}
          <strong>Adobe Photoshop, Illustrator, After Effects, and Lightroom</strong>. 
          <br />
          <br />
          You'll learn how to craft professional visuals, edit images, and design engaging content for digital media.
        </>
      ),
      duration: "48 Hours",
      weeks: "4 Weeks",
      certificates: "2 Certificates"
    }
  ];
  




  return (
    <section className="our-courses" id="courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h6>OUR COURSES</h6>
              <h4>
                What You Can <em>Learn</em>
              </h4>
              <p>
                Explore our expert-led courses designed to equip you with the latest skills in our modern tech world.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="naccs">
              <div className="tabs">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="menu">
                      {courses.map((course, index) => (
                        <div
                          className={`gradient-border${index === 0 ? " active" : ""}`}
                          key={index}
                        >
                          {course.title}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <ul className="nacc">
                      {courses.map((course, index) => (
                        <li className={index === 0 ? "active" : ""} key={index}>
                          <div>
                            <div className="left-image">
                              <img src={course.image} alt="" />
                              <div className="price">
                                <h6>{course.price}</h6>
                              </div>
                            </div>
                            <div className="right-content">
                              <h4>{course.title}</h4>
                              <p>{course.description}</p>
                              <span>{course.duration}</span>
                              <span>{course.weeks}</span>
                              <span className="last-span">{course.certificates}</span>
                              <div className="text-button">
                                <a href="contact-us.html">Apply Course</a>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part4;
