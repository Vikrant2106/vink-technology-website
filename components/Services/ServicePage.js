import React from "react";
import Image from "next/image";

import BannerShape1 from "../../public/img/inner-banner/banner-shape1.png";
import BannerShape2 from "../../public/img/inner-banner/banner-shape2.png";
import BannerShape3 from "../../public/img/inner-banner/banner-shape3.png";
import DotShape from "../../public/img/shape/dots-shape.png";

import ServiceIcon1 from "../../public/img/service/service-icon1.png";
import ServiceIcon2 from "../../public/img/service/service-icon2.png";
import ServiceIcon3 from "../../public/img/service/service-icon3.png";
import ServiceIcon4 from "../../public/img/service/service-icon4.png";
import ServiceIcon5 from "../../public/img/service/service-icon5.png";
import ServiceIcon6 from "../../public/img/service/service-icon6.png";

import ServiceShape from "../../public/img/service/service-shape.png";

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

export default function ServicePage() {
  return (
    <>
      {/* <!-- Inner Banner Area --> */}
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>Services</li>
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

      <div class="service-widget-area pt-50 pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-before sp-after">Services</span>
            <h2 class="h2-color">
              We’re Flexible to <b>Provide You Best</b>
            </h2>
          </div>
          <div class="row pt-45">
            <div class="col-lg-4 col-md-6">
              <div class="service-card">
                <a href="service-details.html">
                  <Image src={ServiceIcon1} alt="Images" />
                </a>
                <h3>
                  <a href="service-details.html">App Development</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit aut fugitsed quia consequuntur alquam quaerat
                  voluptatem
                </p>
                <div class="service-card-shape">
                  <Image src={ServiceShape} alt="Images" />
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="service-card">
                <a href="service-details.html">
                  <Image src={ServiceIcon2} alt="Images" />
                </a>
                <h3>
                  <a href="service-details.html">Social Media Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit aut fugitsed quia consequuntur alquam quaerat
                  voluptatem
                </p>
                <div class="service-card-shape">
                  <Image src={ServiceShape} alt="Images" />
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="service-card">
                <a href="service-details.html">
                  <Image src={ServiceIcon3} alt="Images" />
                </a>
                <h3>
                  <a href="service-details.html">Content Marketing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit aut fugitsed quia consequuntur alquam quaerat
                  voluptatem
                </p>
                <div class="service-card-shape">
                  <Image src={ServiceShape} alt="Images" />
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="service-card">
                <a href="service-details.html">
                  <Image src={ServiceIcon4} alt="Images" />
                </a>
                <h3>
                  <a href="service-details.html">SEO Optimization</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit aut fugitsed quia consequuntur alquam quaerat
                  voluptatem
                </p>
                <div class="service-card-shape">
                  <Image src={ServiceShape} alt="Images" />
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="service-card">
                <a href="service-details.html">
                  <Image src={ServiceIcon5} alt="Images" />
                </a>
                <h3>
                  <a href="service-details.html">Web Development</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit aut fugitsed quia consequuntur alquam quaerat
                  voluptatem
                </p>
                <div class="service-card-shape">
                  <Image src={ServiceShape} alt="Images" />
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="service-card">
                <a href="service-details.html">
                  <Image src={ServiceIcon6} alt="Images" />
                </a>
                <h3>
                  <a href="service-details.html">PPC Advertising</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis
                  iste natus odit aut fugitsed quia consequuntur alquam quaerat
                  voluptatem
                </p>
                <div class="service-card-shape">
                  <Image src={ServiceShape} alt="Images" />
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="pagination-area text-center">
                <a href="#" class="prev page-numbers">
                  <i class="bx bx-chevron-left"></i>
                </a>

                <span class="page-numbers current" aria-current="page">
                  1
                </span>
                <a href="#" class="page-numbers">
                  2
                </a>
                <a href="#" class="page-numbers">
                  3
                </a>
                <a href="#" class="page-numbers">
                  4
                </a>

                <a href="#" class="next page-numbers">
                  <i class="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

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
