import React from "react";
import Image from "next/image";

import BannerShape1 from "../../public/img/inner-banner/banner-shape1.png";
import BannerShape2 from "../../public/img/inner-banner/banner-shape2.png";
import BannerShape3 from "../../public/img/inner-banner/banner-shape3.png";

import DotsShape from "../../public/img/shape/dots-shape.png";
import ContactImg from "../../public/img/contact-img.png";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      {/* <!-- Inner Banner Area --> */}
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <Link href="index.html">Home</Link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div class="inner-banner-shape">
          <div class="shape-one">
            <img src={BannerShape1} alt="Images" />
          </div>

          <div class="shape-two">
            <img src={BannerShape2} alt="Images" />
          </div>

          <div class="shape-three">
            <img src={BannerShape3} alt="Images" />
          </div>

          <div class="inner-banner-dots">
            <img src={DotsShape} alt="Images" />
          </div>
        </div>
      </div>
      {/* <!-- Inner Banner Area End --> */}

      {/* <!-- Contact Area --> */}
      <div class="contact-area pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-before sp-after">Contact</span>
            <h2>Get in Touch</h2>
          </div>

          <div class="row pt-45">
            <div class="col-lg-4 col-md-6">
              <div class="contact-card">
                <i class="flaticon-planet-earth"></i>
                <h3>Office Location</h3>
                <p> WZ-1370, Third Floor, Nangal Raya </p>
                <p> New Delhi-110046.</p>

                {/* <Link href="/direction" class="contact-card-btn">
                  <a class="contact-card-btn">
                    Direction
                    <i class="bx bx-plus plus-btn"></i>
                  </a>
                </Link> */}
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="contact-card">
                <i class="flaticon-email"></i>
                <h3>Contact</h3>
                <p>info@vinktechnology.com </p>
                <p> Mobile: (+91) -9873117660 </p>
                {/* <Link href="/learn" class="contact-card-btn">
                  <a class="contact-card-btn">
                    Learn More
                    <i class="bx bx-plus plus-btn"></i>
                  </a>
                </Link> */}
              </div>
            </div>

            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div class="contact-card">
                <i class="flaticon-clock"></i>
                <h3>Hours of Operation</h3>
                <p>Monday - Saturday: 10:00 - 19:00</p>
                <p>Sunday: Closed</p>
                {/* <Link href="/support" class="contact-card-btn">
                  <a class="contact-card-btn">
                    Support
                    <i class="bx bx-plus plus-btn"></i>
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact Area End --> */}

      {/* <!-- Contact Section --> */}
      <div class="contact-section pt-100 pb-70">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-5">
              <div class="contact-img">
                <img src={ContactImg} alt="Images" />
              </div>
            </div>

            <div class="col-lg-7">
              <div class="contact-wrap">
                <div class="contact-form">
                  <div class="section-title">
                    <span class="sp-before sp-after">Contact</span>
                    <h2>Contact With Us</h2>
                  </div>
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
      {/* <!-- Contact Section End --> */}

      {/* <!-- Contact Map --> */}
      <div class="contact-map">
        <div class="container-fluid m-0 p-0">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.3734131639715!2d-96.95588917878352!3d18.89830951964275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4e51eb45eacad%3A0x465ac54aa2735573!2zUmluY29uIGRlbCBCb3NxdWUsIOCmleCmsOCnjeCmoeCni-CmrOCmviwg4Kat4KeH4Kaw4Ka-4KaV4KeN4Kaw4KeB4KacLCDgpq7gp4fgppXgp43gprjgpr_gppXgp4s!5e0!3m2!1sbn!2sbd!4v1594641366896!5m2!1sbn!2sbd"
            width="600"
            height="450"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.683442510202!2d77.10640571514426!3d28.60927199188396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d09936c8e5f%3A0xcecd83a1a3f28594!2sVink%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1667720387851!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            aria-hidden="false"
            tabindex="0"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* <!-- Map Area End --> */}
    </>
  );
}
