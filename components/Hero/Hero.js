import React from "react";
import Image from "next/image";

import HomeOneShape from "../../public/img/home1/home-one-shape.png";
import HomeOneShape1 from "../../public/img/home1/home-one-shape1.png";
import HomeOneShape2 from "../../public/img/home1/home-one-shape2.png";
import HomeOneShape3 from "../../public/img/home1/home-one-shape3.png";
import HomeOneShape4 from "../../public/img/home1/home-one-shape4.png";
import HomeOneShape5 from "../../public/img/home1/home-one-shape5.png";
import Home1 from "../../public/img/home1/home1.png";

export default function Hero() {
  return (
    <>
      {/* <!-- Banner Area --> */}
      <div class="banner-area">
        <div class="container-fluid">
          <div class="container-max-2">
            <div class="col-lg-7">
              <div class="banner-content">
                <div class="title">
                  <i class="flaticon-idea"></i>
                  <span>The Generator</span>
                </div>

                <h1>
                  Possible to Link <b>Actual Customer</b>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor avida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.
                </p>

                <div class="banner-btn">
                  <a href="#" class="get-btn">
                    Get started
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="tel:+123-098-456-098" class="call-btn">
                    <i class="bx bx-plus"></i>
                    +123-098-456-098
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-shape-right">
          <Image src={HomeOneShape} alt="Images" />
        </div>
        <div class="banner-img">
          <Image src={Home1} alt="Images" />
        </div>
        <div class="banner-shape">
          <div class="shape1">
            <Image src={HomeOneShape3} alt="Images" />
          </div>
          <div class="shape2">
            <Image src={HomeOneShape1} alt="Images" />
          </div>
          <div class="shape3">
            <Image src={HomeOneShape2} alt="Images" />
          </div>
          <div class="shape4">
            <Image src={HomeOneShape4} alt="Images" />
          </div>
          <div class="shape5">
            <Image src={HomeOneShape5} alt="Images" />
          </div>
        </div>
      </div>
      {/* <!-- Banner Area End --> */}
    </>
  );
}
