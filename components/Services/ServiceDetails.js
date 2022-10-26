import React from "react";
import Image from "next/image";

import BannerShape1 from "../../public/img/inner-banner/banner-shape1.png";
import BannerShape2 from "../../public/img/inner-banner/banner-shape2.png";
import BannerShape3 from "../../public/img/inner-banner/banner-shape3.png";
import DotShape from "../../public/img/shape/dots-shape.png";

import ServiceDetailsImg1 from "../../public/img/service/service-details.jpg";
import ServiceDetailsImg from "../../public/img/service/service-details-img2.png";

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
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
      {/* <!-- Inner Banner Area --> */}
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3>Content Marketing</h3>
            <ul>
              <li>
                <Link href="index.html">Home</Link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
              </li>
              <li>Service Details</li>
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

      {/* <!-- Service Details Area --> */}
      <div class="service-details-area pt-50 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="service-left">
                <div class="service-content">
                  <Image src={ServiceDetailsImg1} alt="Images" />
                  <h2>Content Marketing</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    plicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-sm-6">
                    <div class="service-content-card">
                      <h3>Real-time Keyword Data</h3>
                      <p>
                        Lorem ipsum dolor sit ametaut odiut perspiciatis unde
                        omnis iste quuntur alquam quaerat rsit amet
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-6 col-sm-6">
                    <div class="service-content-card">
                      <h3>Scalable Keyword Growth</h3>
                      <p>
                        Lorem ipsum dolor sit ametaut odiut perspiciatis unde
                        omnis iste quuntur alquam quaerat rsit amet
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-6 col-sm-6">
                    <div class="service-content-card">
                      <h3>ROI Obsessed Keywords</h3>
                      <p>
                        Lorem ipsum dolor sit ametaut odiut perspiciatis unde
                        omnis iste quuntur alquam quaerat rsit amet
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-6 col-sm-6">
                    <div class="service-content-card">
                      <h3>Total Keyword Growth Visibility</h3>
                      <p>
                        Lorem ipsum dolor sit ametaut odiut perspiciatis unde
                        omnis iste quuntur alquam quaerat rsit amet
                      </p>
                    </div>
                  </div>
                </div>

                <div class="content-widget-area">
                  <div class="row">
                    <div class="col-lg-7">
                      <div class="content-widget-img">
                        <Image src={ServiceDetailsImg} alt="Images" />
                      </div>
                    </div>

                    <div class="col-lg-5">
                      <div class="content-widget-text">
                        <h2>The Entire Solution For Content Marketer</h2>
                        <p>
                          Lorem ipsum dolor sit ametaut odiut perspiciatis unde
                          omnis iste quuntur alquam quaerat rsit amet
                        </p>
                        <ul>
                          <li>
                            <i class="bx bx-check"></i>
                            The Field of Data Science
                          </li>
                          <li>
                            <i class="bx bx-check"></i>
                            SEO is Uniquely Built Around
                          </li>
                          <li>
                            <i class="bx bx-check"></i>
                            Google’s search algorithm
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore tus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis
                  onsectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
                </p>
                <div class="service-widget-list">
                  <ul>
                    <li class="active">
                      <span>75%</span>
                      <div class="content list1">
                        <h3>SEO & Marketing</h3>
                      </div>
                    </li>
                    <li>
                      <div class="content list2">
                        <h3>Keywords Results</h3>
                      </div>
                      <span>66%</span>
                    </li>
                    <li>
                      <span>43%</span>
                      <div class="content list3">
                        <h3>Google Analytics</h3>
                      </div>
                    </li>
                    <li>
                      <div class="content list2">
                        <h3>Off Page SEO</h3>
                      </div>
                      <span>15%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="service-widget-right">
                <div class="widget-category">
                  <h3>Other Services</h3>
                  <ul>
                    <li>
                      <Link href="/">AI & ML Development</Link>
                    </li>
                    <li>
                      <Link href="/">Data Visualization</Link>
                    </li>
                    <li>
                      <Link href="/">Data Science</Link>
                    </li>
                    <li>
                      <Link href="/">Content Marketing</Link>
                    </li>
                    <li>
                      <Link href="/">SEO & Internet</Link>
                    </li>
                  </ul>
                </div>

                <div class="contact-widget">
                  <h2>Contact Info</h2>
                  <ul>
                    <li>
                      <i class="flaticon-telephone"></i>
                      <div class="content">
                        <h3>Phone: </h3>
                        <span>
                          <Link href="tel:+564325677896">+56432 567 7896</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i class="flaticon-email-1"></i>
                      <div class="content">
                        <h3>Email:</h3>
                        <span>
                          <Link href="mailto:hello@zinka.com">
                            hello@zinka.com
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i class="flaticon-planet-earth"></i>
                      <div class="content">
                        <h3>Location:</h3>
                        <span>112/7 New York, USA</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="service-widget-two">
                  <h2>Brochures</h2>
                  <ul>
                    <li>
                      <i class="flaticon-pdf-file"></i>
                      <div class="content">
                        <h3>01:</h3>
                        <span>
                          <Link href="/">PDF Download</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i class="flaticon-pdf-file"></i>
                      <div class="content">
                        <h3>02:</h3>
                        <span>
                          <Link href="/">Services Details.txt</Link>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service Details Area End --> */}

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
