import React from "react";
import Image from "next/image";

import Shape1 from "../../public/img/inner-banner/banner-shape1.png";
import Shape2 from "../../public/img/inner-banner/banner-shape2.png";
import Shape3 from "../../public/img/inner-banner/banner-shape3.png";

import DotShape from "../../public/img/shape/dots-shape.png";
import FaqImage from "../../public/img/faq-img.png";

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
            <Image src={Shape1} alt="Images" />
          </div>

          <div class="shape-two">
            <Image src={Shape2} alt="Images" />
          </div>

          <div class="shape-three">
            <Image src={Shape3} alt="Images" />
          </div>

          <div class="inner-banner-dots-2">
            <Image src={DotShape} alt="Images" />
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
                <Image src={FaqImage} alt="Images" />
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
    </>
  );
}
