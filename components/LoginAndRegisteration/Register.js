import React from "react";

export default function Register() {
  return (
    <>
      {/* <!-- Inner Banner Area --> */}
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3>Sign Up</h3>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>Sign Up</li>
            </ul>
          </div>
        </div>

        <div class="inner-banner-shape">
          <div class="shape-one">
            <img src="img/inner-banner/banner-shape1.png" alt="Images" />
          </div>

          <div class="shape-two">
            <img src="img/inner-banner/banner-shape2.png" alt="Images" />
          </div>

          <div class="shape-three">
            <img src="img/inner-banner/banner-shape3.png" alt="Images" />
          </div>

          <div class="inner-banner-dots-2">
            <img src="img/shape/dots-shape.png" alt="Images" />
          </div>
        </div>
      </div>
      {/* <!-- Inner Banner Area End --> */}

      {/* <!-- Sign In Area --> */}
      <div class="sign-in-area pt-50 pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-before sp-after">Sign Up</span>
            <h2 class="h2-color">Create an Account!</h2>
          </div>
          <div class="row align-items-center pt-45">
            <div class="col-lg-5">
              <div class="user-all-img">
                <img src="img/faq-img.png" alt="Images" />
              </div>
            </div>

            <div class="col-lg-7">
              <div class="user-all-form">
                <div class="contact-form">
                  <form id="contactForm">
                    <div class="row">
                      <div class="col-lg-12 ">
                        <div class="form-group">
                          <i class="bx bx-user"></i>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            required
                            data-error="Please enter your Username"
                            placeholder="Username"
                          />
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="form-group">
                          <i class="bx bx-mail-send"></i>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            class="form-control"
                            required
                            data-error="Please enter email"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <i class="bx bx-lock-alt"></i>
                          <input
                            class="form-control"
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div class="col-lg-12 col-md-12 text-center">
                        <button type="submit" class="default-btn">
                          Sign Up
                          <i class="bx bx-plus"></i>
                        </button>
                      </div>

                      <div class="col-12">
                        <p class="account-desc">
                          Already have an account?
                          <a href="sign-in.html">Sign In</a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Sign In Area End --> */}

      {/* <!-- Brand Logo Area --> */}
      <div class="brand-logo-area  pt-100">
        <div class="container-fluid">
          <div class="container-max">
            <div class="brand-logo-slider owl-carousel owl-theme">
              <div class="brand-logo-item">
                <img
                  src="img/brand/brand-logo1.png"
                  class="brand-logo1"
                  alt="Images"
                />
                <img
                  src="img/brand/brand-style1.png"
                  class="brand-logo2"
                  alt="Images"
                />
              </div>
              <div class="brand-logo-item">
                <img
                  src="img/brand/brand-logo2.png"
                  class="brand-logo1"
                  alt="Images"
                />
                <img
                  src="img/brand/brand-style2.png"
                  class="brand-logo2"
                  alt="Images"
                />
              </div>
              <div class="brand-logo-item">
                <img
                  src="img/brand/brand-logo3.png"
                  class="brand-logo1"
                  alt="Images"
                />
                <img
                  src="img/brand/brand-style3.png"
                  class="brand-logo2"
                  alt="Images"
                />
              </div>
              <div class="brand-logo-item">
                <img
                  src="img/brand/brand-logo4.png"
                  class="brand-logo1"
                  alt="Images"
                />
                <img
                  src="img/brand/brand-style4.png"
                  class="brand-logo2"
                  alt="Images"
                />
              </div>
              <div class="brand-logo-item">
                <img
                  src="img/brand/brand-logo5.png"
                  class="brand-logo1"
                  alt="Images"
                />
                <img
                  src="img/brand/brand-style5.png"
                  class="brand-logo2"
                  alt="Images"
                />
              </div>
              <div class="brand-logo-item">
                <img
                  src="img/brand/brand-logo6.png"
                  class="brand-logo1"
                  alt="Images"
                />
                <img
                  src="img/brand/brand-style6.png"
                  class="brand-logo2"
                  alt="Images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Brand Logo Area End --> */}
    </>
  );
}
