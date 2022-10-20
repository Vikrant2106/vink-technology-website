import React from "react";
import Image from "next/image";
import BannerShape1 from "../../public/img/inner-banner/banner-shape1.png";
import BannerShape2 from "../../public/img/inner-banner/banner-shape2.png";
import BannerShape3 from "../../public/img/inner-banner/banner-shape3.png";
// import BannerShape4 from "../../public/img/inner-banner/banner-shape4.png";
import AboutImage1 from "../../public/img/about/about-img4.png";
import CounterShape from "../../public/img/counter/counter-shape.png";
import WorkImage from "../../public/img/work-img.png";
import HistoryImg from "../../public/img/history-img.png";
import TeamImg7 from "../../public/img/team/team-img7.jpg";
import TeamImg8 from "../../public/img/team/team-img8.jpg";
import TeamImg9 from "../../public/img/team/team-img9.jpg";
import TeamImg10 from "../../public/img/team/team-img10.jpg";
import TeamImg11 from "../../public/img/team/team-img11.jpg";
import TeamImg12 from "../../public/img/team/team-img12.jpg";

import Shape13 from "../../public/img/shape/shape13.png";
import Shape12 from "../../public/img/shape/shape12.png";
import Shape11 from "../../public/img/shape/shape11.png";
import Shape10 from "../../public/img/shape/shape10.png";
import Shape9 from "../../public/img/shape/shape9.png";
import Shape14 from "../../public/img/shape/shape14.png";
import Shape7 from "../../public/img/shape/shape7.png";

import Testimonial1 from "../../public/img/testimonial/testimonial1.png";
import Testimonial2 from "../../public/img/testimonial/testimonial2.png";
import Testimonial3 from "../../public/img/testimonial/testimonial3.png";
import Testimonial4 from "../../public/img/testimonial/testimonial4.png";
import Testimonial5 from "../../public/img/testimonial/testimonial5.png";

import TestimonialImg1 from "../../public/img/testimonial/testimonial-img1.png";
import TestimonialImg2 from "../../public/img/testimonial/testimonial-img2.png";
import TestimonialImg3 from "../../public/img/testimonial/testimonial-img3.png";

import BrandLogo1 from "../../public/img/brand/brand-logo1.png";
import BrandLogo2 from "../../public/img/brand/brand-logo2.png";
import BrandLogo3 from "../../public/img/brand/brand-logo3.png";
import BrandLogo4 from "../../public/img/brand/brand-logo4.png";
import BrandLogo5 from "../../public/img/brand/brand-logo5.png";
import BrandLogo6 from "../../public/img/brand/brand-logo6.png";

import BrandStyle1 from "../../public/img/brand/brand-style1.png";
import BrandStyle2 from "../../public/img/brand/brand-style2.png";
import BrandStyle3 from "../../public/img/brand/brand-style3.png";
import BrandStyle4 from "../../public/img/brand/brand-style4.png";
import BrandStyle5 from "../../public/img/brand/brand-style5.png";
import BrandStyle6 from "../../public/img/brand/brand-style6.png";

export default function AboutMultiple() {
  return (
    <>
      {/* <!-- Inner Banner Area --> */}
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3>About Us</h3>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>About Us</li>
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

          <div class="inner-banner-dots">
            <Image src={BannerShape3} alt="Images" />
          </div>
        </div>
      </div>
      {/* <!-- Inner Banner Area End --> */}

      {/* <!-- About Widget Area --> */}
      <div class="about-widget-area pt-50 pb-70">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-widget-img">
                <Image src={AboutImage1} alt="" />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="about-widget-content">
                <div class="section-title">
                  <span class="sp-before sp-after">About Us</span>
                  <h2>Grow Your Business With Our Agency</h2>
                </div>
                <h3>
                  We have 30 yearsOur strategy includes consistently evolving,
                  to ensure we’re producing exceptional SEO for business.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna tetur
                  adipisicing saliqua.
                </p>

                <div class="about-widget-list">
                  <ul>
                    <li>
                      <i class="bx bx-check"></i>
                      <span>01</span>
                      <p>
                        High standards of professionalism, integrity.
                        Establishment of close working relationships.
                      </p>
                    </li>

                    <li>
                      <i class="bx bx-check"></i>
                      <span>02</span>
                      <p>
                        A different way of thinking, both inside and outside the
                        box. We do not have to be the best.
                      </p>
                    </li>

                    <li>
                      <i class="bx bx-check"></i>
                      <span>03</span>
                      <p>
                        We do not have to be the best, we do have to give our
                        best Ability to learn. Multicultural competence.
                      </p>
                    </li>
                  </ul>
                </div>

                <div class="about-video">
                  <a
                    href="https://www.youtube.com/watch?v=07d2dXHYb94&t=6s"
                    class="video-btn popup-btn"
                  >
                    <i class="flaticon-forward"></i>
                    <span>Play Video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About Widget Area End --> */}

      {/* <!-- Counter Area --> */}
      <div class="counter-area-two pt-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6 col-md-3">
              <div class="counter-card">
                <h3>10 Years</h3>
                <p>GLORIOUS YEARS</p>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6 col-md-3">
              <div class="counter-card">
                <h3>100%</h3>
                <p>SATISFACTION RATE</p>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6 col-md-3">
              <div class="counter-card">
                <h3>70+</h3>
                <p>TEAM MEMBERS</p>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6 col-md-3">
              <div class="counter-card">
                <h3>25+</h3>
                <p>SENIOR SCIENTIST</p>
              </div>
            </div>
          </div>
        </div>

        <div class="counter-shape-top">
          <Image src={CounterShape} alt="Images" />
        </div>
      </div>
      {/* <!-- Counter Area End --> */}

      {/* <!-- Service List Area --> */}
      <div class="service-list-area pt-100 pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-before sp-after">Services</span>
            <h2>Our Journey’s Path</h2>
          </div>

          <div class="row pt-45">
            <div class="col-lg-4 col-md-6">
              <div class="service-list-content">
                <h3>Our Mission</h3>
                <p>
                  Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis
                  iste quuntur alquam quaerat rsit amet
                </p>
                <ul>
                  <li>
                    <i class="bx bx-check"></i>
                    Creating Results.
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Good Thinking
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Expect More
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Brilliant Minds
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="service-list-content">
                <h3>Who We Are</h3>
                <p>
                  Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis
                  iste quuntur alquam quaerat rsit amet
                </p>
                <ul>
                  <li>
                    <i class="bx bx-check"></i>
                    We Have You Covered
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Stay Real Always
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    We Turn Heads
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Stay Real Always
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div class="service-list-content">
                <h3>Our History</h3>
                <p>
                  Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis
                  iste quuntur alquam quaerat rsit amet
                </p>
                <ul>
                  <li>
                    <i class="bx bx-check"></i>
                    Activate Listening
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Better Best Wow!
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Brilliant Minds
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Activate Listening
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service List Area End --> */}

      {/* <!-- Work Area Two --> */}
      <div class="work-area-two pt-100 pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-before sp-after">Working Process</span>
            <h2 class="h2-color2">Simple & Clean Work Process</h2>
          </div>

          <div class="row pt-45">
            <div class="col-lg-4">
              <div class="work-item-list">
                <ul>
                  <li class="text-right">
                    <h3>
                      Frame the Problem <span>1</span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p>
                  </li>

                  <li class="text-right">
                    <h3>
                      Collect the Raw Data <span>2</span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p>
                  </li>

                  <li class="text-right">
                    <h3>
                      Process the Data <span>3</span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="work-img-2">
                <Image src={WorkImage} alt="Images" />
              </div>
            </div>

            <div class="col-lg-4">
              <div class="work-item-list-2">
                <ul>
                  <li>
                    <h3>
                      <span>4</span>Explore the Data
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p>
                  </li>

                  <li>
                    <h3>
                      <span>5</span>Perform Analysis
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p>
                  </li>

                  <li>
                    <h3>
                      <span>6</span>Communicate Results
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia
                      consequuntur{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Work Area Two End --> */}

      {/* <!-- History Area --> */}
      <div class="history-area pt-100 pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-before sp-after">Our History</span>
            <h2>The Facts About Our Company</h2>
          </div>
          <div class="history-list">
            <ul>
              <li class="active">
                <i class="bx bx-check"></i>
                <div class="content">
                  <h3>2010</h3>
                  <span>February 20th</span>
                </div>
              </li>
              <li>
                <i class="bx bx-check"></i>
                <div class="content">
                  <h3>2012</h3>
                  <span>January 14th</span>
                </div>
              </li>
              <li>
                <i class="bx bx-check"></i>
                <div class="content">
                  <h3>2016</h3>
                  <span>March 25th</span>
                </div>
              </li>
              <li>
                <i class="bx bx-check"></i>
                <div class="content">
                  <h3>2018</h3>
                  <span>December 10th</span>
                </div>
              </li>
              <li>
                <i class="bx bx-check"></i>
                <div class="content">
                  <h3>2019</h3>
                  <span>February 01th</span>
                </div>
              </li>
            </ul>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="history-content">
                <h2>Great Success of the Year</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip comodo consequa dolor consectetur
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam quis nostrud exercitation{" "}
                </p>
                <a href="#" class="default-btn">
                  Learn more
                  <i class="bx bx-plus"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="history-img">
                <Image src={HistoryImg} alt="Images" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- History Area End --> */}

      {/* <!-- Team Area Two --> */}
      <div class="team-area-two pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-before sp-after">Team</span>
            <h2 class="h2-color2">
              Meet Our Data Scientist to Grow Your Business
            </h2>
          </div>

          <div class="team-slider-two owl-carousel owl-theme">
            <div class="team-card active">
              <a href="#">
                <Image src={TeamImg7} alt="Images" />
              </a>
              <div class="content">
                <h3>
                  <a href="team.html">Cristiono Kopper</a>
                </h3>
                <span>Web Developer</span>
                <ul class="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="team-card team-rotated">
              <a href="#">
                <Image src={TeamImg8} alt="Images" />
              </a>
              <div class="content">
                <h3>
                  <a href="team.html">Jermin Jekson</a>
                </h3>
                <span>Marketing Manager</span>
                <ul class="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="team-card">
              <a href="#">
                <Image src={TeamImg9} alt="Images" />
              </a>
              <div class="content">
                <h3>
                  <a href="team.html">Hobler Jeain</a>
                </h3>
                <span>General Manager</span>
                <ul class="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="team-card team-rotated-2">
              <a href="#">
                <Image src={TeamImg10} alt="Images" />
              </a>
              <div class="content">
                <h3>
                  <a href="team.html">Julfiker Jeain</a>
                </h3>
                <span>CEO At Ostino</span>
                <ul class="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="team-card active">
              <a href="#">
                <Image src={TeamImg11} alt="Images" />
              </a>
              <div class="content">
                <h3>
                  <a href="team.html">Hobler Jeain</a>
                </h3>
                <span>General Manager</span>
                <ul class="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="team-card team-rotated-2">
              <a href="#">
                <Image src={TeamImg12} alt="Images" />
              </a>
              <div class="content">
                <h3>
                  <a href="team.html">Julfiker Jeain</a>
                </h3>
                <span>CEO At Ostino</span>
                <ul class="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="team-two-shape">
          <div class="shape1">
            <Image src={Shape13} alt="Images" />
          </div>

          <div class="shape2">
            <Image src={Shape11} alt="Images" />
          </div>

          <div class="shape3">
            <Image src={Shape10} alt="Images" />
          </div>

          <div class="shape4">
            <Image src={Shape9} alt="Images" />
          </div>

          <div class="shape5">
            <Image src={Shape12} alt="Images" />
          </div>

          <div class="shape6">
            <Image src={Shape7} alt="Images" />
          </div>

          <div class="shape7">
            <Image src={Shape14} alt="Images" />
          </div>
        </div>
      </div>
      {/* <!-- Team Area Two End --> */}

      {/* <!-- Testimonial Area --> */}
      <div class="testimonial-area testimonial-area-mb ptb-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <div class="testimonial-list">
                <div class="list-img-1">
                  <Image src={Testimonial1} alt="Images" />
                </div>
                <div class="list-img-2">
                  <Image src={Testimonial2} alt="Images" />
                </div>
                <div class="list-img-3">
                  <Image src={Testimonial3} alt="Images" />
                </div>
                <div class="list-img-4">
                  <Image src={Testimonial4} alt="Images" />
                </div>
                <div class="list-img-5">
                  <Image src={Testimonial5} alt="Images" />
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="testimonial-title">
                <h2>Words From Customers</h2>
              </div>
              <div class="testimonial-slider owl-carousel owl-theme">
                <div class="testimonial-item">
                  <p>
                    I chose Zinka because of their value And incredible superior
                    customer Service they really awesome treated me like family
                  </p>
                  <div class="content">
                    <Image src={TestimonialImg1} alt="Images" />
                    <div class="content-title">
                      <h3>David McLean</h3>
                      <span>CEO & Manager</span>
                    </div>
                  </div>
                </div>

                <div class="testimonial-item">
                  <p>
                    I chose Zinka because of their value And incredible superior
                    customer Service they really awesome treated me like family
                  </p>
                  <div class="content">
                    <Image src={TestimonialImg2} alt="Images" />
                    <div class="content-title">
                      <h3>Jermin Jekson</h3>
                      <span>Marketing Manager</span>
                    </div>
                  </div>
                </div>

                <div class="testimonial-item">
                  <p>
                    I chose Zinka because of their value And incredible superior
                    customer Service they really awesome treated me like family
                  </p>
                  <div class="content">
                    <Image src={TestimonialImg3} alt="Images" />
                    <div class="content-title">
                      <h3>Julfiker Jeain</h3>
                      <span>CEO At Ostino</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial Area End --> */}

      {/* <!-- Brand Logo Area --> */}
      <div class="brand-logo-area  pt-100">
        <div class="container-fluid">
          <div class="container-max">
            <div class="brand-logo-slider owl-carousel owl-theme">
              <div class="brand-logo-item">
                <Image src={BrandLogo1} class="brand-logo1" alt="Images" />
                <Image src={BrandStyle1} class="brand-logo2" alt="Images" />
              </div>
              <div class="brand-logo-item">
                <Image src={BrandLogo2} class="brand-logo1" alt="Images" />
                <Image src={BrandStyle2} class="brand-logo2" alt="Images" />
              </div>
              <div class="brand-logo-item">
                <Image src={BrandLogo3} class="brand-logo1" alt="Images" />
                <Image src={BrandStyle3} class="brand-logo2" alt="Images" />
              </div>
              <div class="brand-logo-item">
                <Image src={BrandLogo4} class="brand-logo1" alt="Images" />
                <Image src={BrandStyle4} class="brand-logo2" alt="Images" />
              </div>
              <div class="brand-logo-item">
                <Image src={BrandLogo5} class="brand-logo1" alt="Images" />
                <Image src={BrandStyle5} class="brand-logo2" alt="Images" />
              </div>
              <div class="brand-logo-item">
                <Image src={BrandLogo6} class="brand-logo1" alt="Images" />
                <Image src={BrandStyle6} class="brand-logo2" alt="Images" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Brand Logo Area End --> */}
    </>
  );
}
