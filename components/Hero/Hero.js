import React from "react";
import Image from "next/image";

import HomeOneShape from "../../public/img/home1/home-one-shape.png";
import HomeOneShape1 from "../../public/img/home1/home-one-shape1.png";
import HomeOneShape2 from "../../public/img/home1/home-one-shape2.png";
import HomeOneShape3 from "../../public/img/home1/home-one-shape3.png";
import HomeOneShape4 from "../../public/img/home1/home-one-shape4.png";
import HomeOneShape5 from "../../public/img/home1/home-one-shape5.png";
import Home1 from "../../public/img/home1/home1.png";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* <!-- Banner Area --> */}
      <div class="banner-area">
        <div class="container-fluid">
          <div class="container-max-2">
            <div class="col-lg-7">
              <div class="banner-content">
                {/* <div class="title">
                  <i class="flaticon-idea"></i>
                  <span>The Generator</span>
                </div> */}

                <h1>
                  We listen. We innovate. We make it happen
                  {/* <b>We listen. We innovate. We make it happen.</b> */}
                </h1>
                <p>
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor avida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. */}
                  Vink offers custom software development and process
                  outsourcing of the highest quality standards to clients across
                  the globe.
                </p>

                <div class="banner-btn">
                  {/* <Link href="/" class="get-btn">
                    <a class="get-btn">
                      Get started
                      <i class="bx bx-plus"></i>
                    </a>
                  </Link>
                  <Link href="/" class="call-btn">
                    <a href="tel:+91 9716500323" class="call-btn">
                      <i class="bx bx-plus"></i>
                      9716500323
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-shape-right">
          <img src="/img/home1/home-one-shape.png" alt="Landscape picture" />
        </div>
        <div class="banner-img">
          <img src="/img/home1/home1.png" alt="Landscape picture" />
        </div>
        <div class="banner-shape">
          <div class="shape1">
            <img src="/img/home1/home-one-shape3.png" alt="Landscape picture" />
          </div>
          <div class="shape2">
            <img src="/img/home1/home-one-shape1.png" alt="Landscape picture" />
          </div>
          <div class="shape3">
            <img src="/img/home1/home-one-shape2.png" alt="Landscape picture" />
          </div>
          <div class="shape4">
            <img src="/img/home1/home-one-shape4.png" alt="Landscape picture" />
          </div>
          <div class="shape5">
            <img src="/img/home1/home-one-shape5.png" alt="Landscape picture" />
          </div>
        </div>
      </div>
    </>
  );
}
