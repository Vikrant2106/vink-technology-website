import React from "react";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  return (
    <>
      <SearchOverlay />
      {/* <!-- Start Navbar Area --> */}
      <div className="navbar-area">
        {/* <!-- Menu For Mobile Device --> */}
        <div className="mobile-nav">
          <a href="index.html" className="logo">
            <img src="/img/logo/logo1.png" className="logo-one" alt="Logo" />
            <img src="/img/logo/logo2.png" className="logo-two" alt="Logo" />
          </a>
        </div>

        {/* <!-- Menu For Desktop Device --> */}
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="container-max-2 navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="/">
                <img
                  src="/img/logo/logo1.png"
                  className="logo-one"
                  alt="Logo"
                />
                <img
                  src="/img/logo/logo2.png"
                  className="logo-two"
                  alt="Logo"
                />
              </a>

              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a href="/" className="nav-link active">
                      Home
                      {/* <i className="bx bx-plus"></i> */}
                    </a>
                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link active">
                          SEO Agency
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-2.html" className="nav-link">
                          {" "}
                          AI Startup{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-3.html" className="nav-link">
                          Machine Learning
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li className="nav-item">
                    <a href="about" className="nav-link">
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Pages
                      <i className="bx bx-plus"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="team.html" className="nav-link">
                          {" "}
                          Team{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pricing.html" className="nav-link">
                          Pricing Table
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">
                          {" "}
                          FAQ{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Courses
                          <i className="bx bx-plus"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="courses.html" className="nav-link">
                              {" "}
                              Courses{" "}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="course-details.html" className="nav-link">
                              Course Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="testimonials.html" className="nav-link">
                          Testimonials
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Case study
                          <i className="bx bx-plus"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="case-study.html" className="nav-link">
                              Case study
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="case-details.html" className="nav-link">
                              Case study Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="404.html" className="nav-link">
                          {" "}
                          404 page{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="sign-in.html" className="nav-link">
                          {" "}
                          Sign In{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="sign-up.html" className="nav-link">
                          {" "}
                          Sign Up{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="terms-condition.html" className="nav-link">
                          Terms & Conditions
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="privacy-policy.html" className="nav-link">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="coming-soon.html" className="nav-link">
                          Coming Soon
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Services
                      <i className="bx bx-plus"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="services.html" className="nav-link">
                          {" "}
                          Services{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="service-details.html" className="nav-link">
                          Service Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Blog
                      <i className="bx bx-plus"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog.html" className="nav-link">
                          {" "}
                          Blog{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-details.html" className="nav-link">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                </ul>

                <div className="side-nav d-in-line align-items-center">
                  <div className="side-item">
                    <div className="search-box">
                      <i className="flaticon-loupe"></i>
                    </div>
                  </div>

                  <div className="side-item">
                    <div className="user-btn">
                      <a href="#">
                        <i className="flaticon-contact"></i>
                      </a>
                    </div>
                  </div>

                  <div className="side-item">
                    <div className="nav-add-btn">
                      <a href="#" className="nav-menu-btn">
                        Contact us
                        <i className="bx bx-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="side-nav-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="circle-inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>

            <div className="container">
              <div className="side-nav-inner">
                <div className="side-nav justify-content-center align-items-center">
                  <div className="side-item">
                    <div className="search-box">
                      <i className="flaticon-loupe"></i>
                    </div>
                  </div>

                  <div className="side-item">
                    <div className="user-btn">
                      <a href="#">
                        <i className="flaticon-contact"></i>
                      </a>
                    </div>
                  </div>

                  <div className="side-item">
                    <div className="nav-add-btn">
                      <a href="#" className="nav-menu-btn border-radius">
                        Contact us
                        <i className="bx bx-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Navbar Area --> */}
    </>
  );
}
