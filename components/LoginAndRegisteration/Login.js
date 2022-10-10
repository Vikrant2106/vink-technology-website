import React from "react";

export default function Login() {
  return (
    <>
      {/* <!-- Inner Banner Area --> */}
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3>Sign In</h3>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>Sign In</li>
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
            <span class="sp-before sp-after">Sign In</span>
            <h2 class="h2-color">Sign in to Your Account!</h2>
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
                            data-error="Please enter your Username or Email"
                            placeholder="Username or Email"
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

                      <div class="col-lg-6 col-sm-6 form-condition">
                        <div class="agree-label">
                          <input type="checkbox" id="chb1" />
                          <label for="chb1">Remember Me</label>
                        </div>
                      </div>

                      <div class="col-lg-6 col-sm-6">
                        <a class="forget" href="#">
                          Forgot my password?
                        </a>
                      </div>

                      <div class="col-lg-12 col-md-12 text-center">
                        <button type="submit" class="default-btn">
                          Sign In Now
                          <i class="bx bx-plus"></i>
                        </button>
                      </div>

                      <div class="col-12">
                        <p class="account-desc">
                          Not a member?
                          <a href="sign-up.html">Sign Up</a>
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
