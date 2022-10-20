import React from "react";
import Image from "next/image";

import ServiceIcon1 from "../../public/img/service/service-icon1.png";
import ServiceIcon2 from "../../public/img/service/service-icon2.png";
import ServiceIcon3 from "../../public/img/service/service-icon3.png";
import ServiceIcon4 from "../../public/img/service/service-icon4.png";
import ServiceIcon5 from "../../public/img/service/service-icon5.png";
import ServiceIcon6 from "../../public/img/service/service-icon6.png";
import ServiceShape from "../../public/img/service/service-shape.png";
import Dots from "../../public/img/service/dots.png";

import Shape4 from "../../public/img/shape/shape4.png";
import Shape2 from "../../public/img/shape/shape2.png";
import ServiceBg from "../../public/img/service/service-bg.png";

export default function Service() {
  return (
    <>
      <div class="service-area pt-100 pb-70">
        <div class="container">
          <div class="section-title">
            <span class="sp-after">Services</span>
            <h2 class="h2-color">
              We’re Flexible to <b>Provide You Best</b>
            </h2>
          </div>
          <div class="row pt-45">
            <div class="col-lg-4">
              <div class="service-card-into">
                <div class="service-card">
                  <a href="service-details.html">
                    <Image src={ServiceIcon1} alt="Images" />
                  </a>
                  <h3>
                    <a href="service-details.html">App Development</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, aut odiut perspiciatis unde
                    omnis iste natus odit aut fugitsed quia consequuntur alquam
                    quaerat voluptatem
                  </p>
                  <div class="service-card-shape">
                    <Image src={ServiceShape} alt="Images" />
                  </div>
                </div>
                <div class="service-dots">
                  <Image src={Dots} alt="Images" />
                </div>
              </div>
            </div>

            <div class="col-lg-4">
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

            <div class="col-lg-4">
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
          </div>
        </div>

        <div class="service-shape">
          <div class="service-bg">
            <Image src={ServiceBg} alt="Images" />
          </div>
          <div class="shape1">
            <Image src={Shape4} alt="Images" />
          </div>
          <div class="shape2">
            <Image src={Shape2} alt="Images" />
          </div>
        </div>
      </div>
    </>
  );
}
