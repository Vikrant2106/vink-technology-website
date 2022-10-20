import React from "react";
import Image from "next/image";

import BannerShape1 from "../../public/img/inner-banner/banner-shape1.png";
import BannerShape2 from "../../public/img/inner-banner/banner-shape2.png";
import BannerShape3 from "../../public/img/inner-banner/banner-shape3.png";
import DotShape from "../../public/img/shape/dots-shape.png";

import FaqImg from "../../public/img/faq-img.png";

export default function Faq() {
  return (
    <>
      {/* <!-- Inner Banner Area --> */}
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3>FAQ</h3>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        <div class="inner-banner-shape">
          <div class="shape-one">
            <Image src={BannerShape1} alt="Images" />
          </div>

          <div class="shape-two">
            <Image src={BannerShape2} alt="Images" />
          </div>

          <div class="shape-three">
            <Image src={BannerShape3} alt="Images" />
          </div>

          <div class="inner-banner-dots-2">
            <Image src={DotShape} alt="Images" />
          </div>
        </div>
      </div>
      {/* <!-- Inner Banner Area End --> */}

      {/* <!-- Faq Area --> */}
      <div class="faq-area pt-50 pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-before sp-after">FAQ</span>
            <h2 class="h2-color2">Frequently Asked Questions</h2>
          </div>

          <div class="row align-items-center pt-45">
            <div class="col-lg-6">
              <div class="faq-accordion">
                <ul class="accordion">
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="bx bx-chevron-down"></i>
                      How Can a Bigenner Start SEO?
                    </a>

                    <div class="accordion-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipis cing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </li>

                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="bx bx-chevron-down"></i>
                      How Can a I SEO My Website?
                    </a>

                    <div class="accordion-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipis cing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </li>

                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="bx bx-chevron-down"></i>
                      Top 10 SEO Ranking Factors?
                    </a>

                    <div class="accordion-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipis cing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </li>

                  <li class="accordion-item">
                    <a class="accordion-title active" href="javascript:void(0)">
                      <i class="bx bx-chevron-down"></i>
                      Best SEO Practices for Keyword Density?
                    </a>

                    <div class="accordion-content show">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipis cing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="faq-accordion">
                <ul class="accordion">
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="bx bx-chevron-down"></i>
                      What is the Web Development?
                    </a>

                    <div class="accordion-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipis cing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </li>

                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="bx bx-chevron-down"></i>
                      How Can a Beginner Start Web Development?
                    </a>

                    <div class="accordion-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipis cing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </li>

                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="bx bx-chevron-down"></i>
                      What is the App Development?
                    </a>

                    <div class="accordion-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipis cing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </li>

                  <li class="accordion-item">
                    <a class="accordion-title active" href="javascript:void(0)">
                      <i class="bx bx-chevron-down"></i>
                      How Can a Beginner Start App Development?
                    </a>

                    <div class="accordion-content show">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipis cing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Faq Area End --> */}

      {/* <!-- Faq Contact --> */}
      <div class="faq-contact pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-before sp-after">FAQ</span>
            <h2>Tell Us Any Questions</h2>
          </div>
          <div class="row pt-45 align-items-center">
            <div class="col-lg-5">
              <div class="faq-img">
                <Image src={FaqImg} alt="Images" />
              </div>
            </div>

            <div class="col-lg-7">
              <div class="faq-contact-wrap">
                <div class="contact-form">
                  <form id="contactForm">
                    <div class="row">
                      <div class="col-lg-6 col-sm-6">
                        <div class="form-group">
                          <i class="bx bx-user"></i>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            required
                            data-error="Please enter your name"
                            placeholder="Your Name*"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-6 col-sm-6">
                        <div class="form-group">
                          <i class="bx bx-user"></i>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            class="form-control"
                            required
                            data-error="Please enter your email"
                            placeholder="E-mail*"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-6 col-sm-6">
                        <div class="form-group">
                          <i class="bx bx-phone"></i>
                          <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            required
                            data-error="Please enter your number"
                            class="form-control"
                            placeholder="Your Phone"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-6 col-sm-6">
                        <div class="form-group">
                          <i class="bx bx-file"></i>
                          <input
                            type="text"
                            name="msg_subject"
                            id="msg_subject"
                            class="form-control"
                            required
                            data-error="Please enter your subject"
                            placeholder="Your Subject"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-12 col-md-12">
                        <div class="form-group">
                          <i class="bx bx-envelope"></i>
                          <textarea
                            name="message"
                            class="form-control"
                            id="message"
                            cols="30"
                            rows="8"
                            required
                            data-error="Write your message"
                            placeholder="Your Message"
                          ></textarea>
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-12 col-md-12">
                        <button type="submit" class="default-btn border-radius">
                          Send Message
                          <i class="bx bx-plus"></i>
                        </button>
                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
